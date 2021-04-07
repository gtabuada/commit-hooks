module.exports = (pkg) => `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

${pkg} devmoji -e --lint`