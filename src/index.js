#!/usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk')

const installHooks = require('./installHooks')
const checkValidProject = require('./checkValidProject')
const checkPackagerUsed = require('./checkPackagerUsed')
const checkGitRepo = require('./checkGitRepo')

const [, , ...arguments] = process.argv
const validArguments = []
const checkValid = new Set(arguments.map(arg => validArguments.includes(arg)))

if (arguments.length > 0 && checkValid.has(false)) {
  console.log(chalk.red('\n ā Invalid arguments provided.'))
  //validArguments.forEach(arg => console.log('\n', arg))
  process.exit(1)
}

if (!checkValidProject()) {
  console.error(chalk.redBright('\n ā No package.json found in project root folder.'))
  process.exit(1)
}

if (!checkGitRepo()) {
  console.error(
    chalk.redBright(
      '\n ā No Git repository found in current folder. Run `git init` before installing hooks.'
    ))
  process.exit(1)
}

let questions = []

if (!arguments.includes('--no-emoji')) {
  // In the near future...
  /* questions.push({
    type: 'confirm',
    name: 'emoji',
    message: 'Decorate commit messages with emojis?',
    default: true
  }) */
}

const packager = checkPackagerUsed()
if (packager === 'both') {
  console.log(chalk.yellow('\nā Yarn and NPM lock files were found.\n'))
  questions.unshift({
    type: 'list',
    name: 'packager',
    choices: ['Yarn', 'NPM'],
    message: 'Which packager to use?'
  })
}

if (questions.length > 0) {
  return inquirer
    .prompt(questions)
    .then((answers) => installHooks(answers, packager))
}

installHooks({}, packager, arguments)
