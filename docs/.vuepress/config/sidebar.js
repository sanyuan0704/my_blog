const fs = require('fs');
const path = require('path');
const prefixPath = (prefix) => {
  return fs.readdirSync(path.join(process.cwd(), `docs/${prefix}`))
           .map(item => `${prefix}/${item.replace('.md', '')}`)
}

module.exports = (title, dirName, collapsable = true) => {
  return  {
    title,
    collapsable,
    children: prefixPath(dirName)
  }
}

