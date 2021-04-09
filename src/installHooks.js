const path = require('path')
const fs = require('fs')
const { spawnSync } = require('child_process')
const { cyan } = require('chalk')

const cz = require('./config/cz')
const devmoji = require('./config/devmoji')
const prepareCommitMessage = require('./config/prepare-commit-msg')

const installHooks = (answers, packager) => {
  const pkg = (answers.packager || packager).toLowerCase()
  const cmd = process.platform === 'win32' ? '.cmd' : ''
  const installCommand = pkg === 'yarn' ? 'add' : 'install'

  /* config files */
  const czConfigPath = path.resolve(process.cwd(), '.cz.config.js')
  const devmojiConfigPath = path.resolve(process.cwd(), 'devmoji.config.js')
  /* hook files */
  const commitMsgHookPath = path.resolve(process.cwd(), '.git', 'hooks', 'prepare-commit-msg')

  try {
    process.stdout.write('Installing Devmoji...')
    const { status, stderr } = spawnSync(`${pkg}${cmd}`, [installCommand, '-D', 'devmoji'], { encoding: 'utf-8' })
    if (status !== 0) throw Error(stderr)
    process.stdout.clearLine()
    process.stdout.write('Devmoji installed successfully.')

    process.stdout.write('Copying configuration files...')
    fs.writeFileSync(commitMsgHookPath, prepareCommitMessage(pkg === 'npm' ? 'npx' : pkg))
    fs.writeFileSync(czConfigPath, cz)
    fs.writeFileSync(devmojiConfigPath, devmoji)
    process.stdout.clearLine()

    console.log(cyan(`\n ✨ Commit hooks installed successfully!`))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = installHooks