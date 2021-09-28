const fs = require('fs').promises;
const ncp = require('ncp').ncp;
const path = require('path');

async function build() {
  const outDir = path.join(process.cwd(), 'out');
  const nextDir = path.join(process.cwd(), '.next');

  await fs.mkdir(path.join(outDir, '_next', 'static'), { recursive: true });

  // Copy Next.js static assets
  await new Promise((resolve, reject) =>
    ncp(
      path.join(nextDir, 'static'),
      path.join(outDir, '_next', 'static'),
      (err) => (err ? reject(err[0]) : resolve()),
    ),
  );
}
build();
