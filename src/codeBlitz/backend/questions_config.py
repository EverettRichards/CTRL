"""Code Blitz questions: prompt, starters per language, and expected output."""

TIME_PER_QUESTION = 60  # seconds (used for scoring)

QUESTIONS = [
    {
        "id": 1,
        "prompt": "Print the string 'Hello, Code Blitz!'",
        "starter": "print(\"Hello, Code Blitz!\")\n",
        "starter_java": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Code Blitz!\");\n    }\n}\n",
        "starter_cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, Code Blitz!\" << endl;\n    return 0;\n}\n",
        "expected": "Hello, Code Blitz!",
    },
    {
        "id": 2,
        "prompt": "Print the sum of 40 and 2.",
        "starter": "print(40 + 2)\n",
        "starter_java": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(40 + 2);\n    }\n}\n",
        "starter_cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << (40 + 2) << endl;\n    return 0;\n}\n",
        "expected": "42",
    },
    {
        "id": 3,
        "prompt": "Print the first line of input (we'll run with stdin). For this run, just print 'done'.",
        "starter": "print('done')\n",
        "starter_java": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"done\");\n    }\n}\n",
        "starter_cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"done\" << endl;\n    return 0;\n}\n",
        "expected": "done",
    },
]
