const fs = require('fs')
const path = require('path')

function getDllFiles() {
  const dllDir = path.join(__dirname, '../public/dll')
  const files = fs.readdirSync(dllDir)
  const dllFilesArr = files.filter(item => {
    return /.js$/.test(item)
  })
  return dllFilesArr
}

module.exports = {
  getDllFiles,
}
