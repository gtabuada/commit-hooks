const fs = require('fs')
const path = require('path')

const checkValidProject = () => {
  try {
    fs.readFileSync(path.join(process.cwd(), 'package.json'))
    return true
  } catch (err) {
    return false
  }
}

module.exports = checkValidProject