const { spawnSync } = require('child_process')

const checkGitRepo = () => {
  if (spawnSync('git', ['rev-parse']).status !== 0) return false
  return true
}

module.exports = checkGitRepo