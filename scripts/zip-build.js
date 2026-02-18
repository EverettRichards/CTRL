import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

// Paths
const repoRoot = path.resolve(process.cwd());
const distDir = path.join(repoRoot, 'dist');
const indexFile = path.join(distDir, 'index.html');
const assetsDir = path.join(distDir, 'assets');
const outZip = path.join(repoRoot, 'current_build.zip');

async function run() {
  // Check dist exists
  if (!fs.existsSync(distDir)) {
    console.error('Build output directory not found:', distDir);
    process.exit(1);
  }

  if (!fs.existsSync(indexFile)) {
    console.error('index.html not found in dist:', indexFile);
    process.exit(1);
  }

  if (!fs.existsSync(assetsDir)) {
    console.error('assets directory not found in dist:', assetsDir);
    process.exit(1);
  }

  // Remove existing zip if present
  try {
    if (fs.existsSync(outZip)) {
      fs.unlinkSync(outZip);
    }
  } catch (err) {
    console.warn('Could not remove existing zip:', err.message);
  }

  const output = fs.createWriteStream(outZip);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log(`Created ${outZip} (${archive.pointer()} total bytes)`);
  });

  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      console.warn('Archiver warning:', err.message);
    } else {
      throw err;
    }
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);

  // Append index.html at root of zip (so when extracted it will be in the current dir)
  archive.file(indexFile, { name: 'index.html' });

  // Append the entire assets directory under assets/
  archive.directory(assetsDir, 'assets');

  await archive.finalize();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
