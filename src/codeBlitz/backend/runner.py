"""Run user code in Python, Java, or C++. Portable across machines."""
import sys
import io
import os
import tempfile
import subprocess
import shutil

RUN_TIMEOUT_SEC = 10


def _find_java_commands():
    """Prefer Homebrew OpenJDK on macOS so we don't use the /usr/bin stubs."""
    # 1. JAVA_HOME (e.g. set by user or IDE)
    java_home = os.environ.get("JAVA_HOME")
    if java_home:
        jc = os.path.join(java_home, "bin", "javac")
        jv = os.path.join(java_home, "bin", "java")
        if os.path.isfile(jc) and os.path.isfile(jv):
            return (jc, jv)

    # 2. Homebrew OpenJDK (Apple Silicon and Intel)
    for prefix in [
        "/opt/homebrew/opt/openjdk",
        "/usr/local/opt/openjdk",
        "/opt/homebrew/opt/openjdk@17",
        "/usr/local/opt/openjdk@17",
        "/opt/homebrew/opt/openjdk@21",
        "/usr/local/opt/openjdk@21",
    ]:
        jc = os.path.join(prefix, "bin", "javac")
        jv = os.path.join(prefix, "bin", "java")
        if os.path.isfile(jc) and os.path.isfile(jv):
            return (jc, jv)

    # 3. Whatever is in PATH (may be macOS stubs)
    javac_cmd = shutil.which("javac")
    java_cmd = shutil.which("java")
    if javac_cmd and java_cmd:
        return (javac_cmd, java_cmd)

    return (None, None)


def run_python(code: str) -> str:
    old_stdout = sys.stdout
    sys.stdout = io.StringIO()
    try:
        exec(code, {"__builtins__": __builtins__})
        return sys.stdout.getvalue()
    except Exception as e:
        return f"Error:\n{e}"
    finally:
        sys.stdout = old_stdout


def run_java(code: str) -> str:
    javac_cmd, java_cmd = _find_java_commands()
    if not javac_cmd or not java_cmd:
        return (
            "Error: Java (javac/java) not found.\n\n"
            "Install a JDK and restart this app:\n"
            "  macOS:  brew install openjdk\n"
            "  Then restart the backend (e.g. stop and run python app.py again)."
        )
    with tempfile.TemporaryDirectory() as d:
        path_java = os.path.join(d, "Main.java")
        with open(path_java, "w") as f:
            f.write(code)
        try:
            comp = subprocess.run(
                [javac_cmd, path_java],
                capture_output=True,
                text=True,
                timeout=RUN_TIMEOUT_SEC,
                cwd=d,
            )
            if comp.returncode != 0:
                err = (comp.stderr or comp.stdout or "Compilation failed").strip()
                if "Unable to locate a Java Runtime" in err or "No Java runtime present" in err:
                    return (
                        "Error: Java Runtime not installed\n\n"
                        "Install a full JDK (includes compiler + runtime):\n"
                        "  macOS:  brew install openjdk\n"
                        "  Or:    https://adoptium.net/ or https://www.java.com"
                    )
                return f"Compilation Error:\n{err}"

            run_result = subprocess.run(
                [java_cmd, "-cp", d, "Main"],
                capture_output=True,
                text=True,
                timeout=RUN_TIMEOUT_SEC,
                cwd=d,
            )
            out = run_result.stdout or ""
            err = run_result.stderr or ""

            if run_result.returncode != 0:
                if err.strip():
                    error_msg = err.strip()
                    if "Unable to locate a Java Runtime" in error_msg or "No Java runtime present" in error_msg:
                        return (
                            "Error: Java Runtime not installed\n\n"
                            f"{error_msg}\n\nPlease install a JDK:\n"
                            "- macOS: brew install openjdk\n"
                            "- Or download from: https://www.java.com"
                        )
                    return f"Runtime Error:\n{error_msg}"
                elif out.strip():
                    return out.strip()
                else:
                    return f"Error:\nJava process exited with code {run_result.returncode}"

            if err and not out:
                return err.strip()
            if err:
                return (out + "\n" + err).strip()
            return out.strip()
        except subprocess.TimeoutExpired:
            return f"Error:\nTimeout after {RUN_TIMEOUT_SEC}s"
        except FileNotFoundError as e:
            return f"Error:\nJava tools not found: {e}\nPlease install a JDK."


def run_cpp(code: str) -> str:
    with tempfile.TemporaryDirectory() as d:
        path_cpp = os.path.join(d, "solution.cpp")
        path_bin = os.path.join(d, "solution")
        with open(path_cpp, "w") as f:
            f.write(code)
        try:
            comp = subprocess.run(
                ["g++", "-o", path_bin, path_cpp],
                capture_output=True,
                text=True,
                timeout=RUN_TIMEOUT_SEC,
                cwd=d,
            )
            if comp.returncode != 0:
                return (comp.stderr or comp.stdout or "Compilation failed").strip()
            run_result = subprocess.run(
                [path_bin],
                capture_output=True,
                text=True,
                timeout=RUN_TIMEOUT_SEC,
                cwd=d,
            )
            out = run_result.stdout or ""
            if run_result.stderr:
                out = (out + "\n" + run_result.stderr).strip()
            if run_result.returncode != 0 and not out:
                out = f"Exit code {run_result.returncode}"
            return out
        except subprocess.TimeoutExpired:
            return f"Error:\nTimeout after {RUN_TIMEOUT_SEC}s"
        except FileNotFoundError:
            return "Error:\ng++ not found. Install a C++ compiler (e.g. macOS: xcode-select --install, or install gcc/g++)."
