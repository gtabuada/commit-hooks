const fs = require('fs');

const checkPackagerUsed = () => {
  const folder = fs.readdirSync(process.cwd())
  if (folder.includes('yarn.lock') && folder.includes('package-lock.json')) return 'both'
  if (folder.includes('package-lock.json')) return 'npm'
  if (folder.includes('yarn.lock')) return 'yarn'
}

module.exports = checkPackagerUsed