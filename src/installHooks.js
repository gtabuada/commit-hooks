const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')
const { cyan } = require('chalk')

const cz = require('./config/cz')
const devmoji = require('./config/devmoji')
const common = require('./config/common')
const prepareCommitMessage = require('./config/prepare-commit-msg')

const installHooks = (answers, packager) => {
  const pkg = (answers.packager || packager).toLowerCase()
  const installCommand = pkg === 'yarn' ? 'add' : 'install'

  /* config files */
  const czConfigPath = path.resolve(process.cwd(), '.cz.config.js')
  const devmojiConfigPath = path.resolve(process.cwd(), 'devmoji.config.js')
  /* hook files */
  const commonPath = path.resolve(process.cwd(), '.husky', 'common.sh')
  const commitMsgHookPath = path.resolve(process.cwd(), '.husky', 'prepare-commit-msg')

  try {
    execSync(`${pkg} ${installCommand} -D devmoji husky`)

    /* create husky folder if not already presents */
    if (!fs.readdirSync(process.cwd()).includes('.husky')) {
      fs.mkdirSync(path.resolve(process.cwd(), '.husky'))
    }

    fs.writeFileSync(commitMsgHookPath, prepareCommitMessage(pkg === 'npm' ? 'npx' : pkg))
    fs.writeFileSync(commonPath, common)
    fs.writeFileSync(czConfigPath, cz)
    fs.writeFileSync(devmojiConfigPath, devmoji)

    execSync(`${pkg === 'npm' ? 'npx' : pkg} husky install`)
    console.log(cyan(`\n ✨ Commit hooks installed successfully!`))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = installHooks