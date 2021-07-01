const path = require('path')
const fs = require('fs')
const csv = require('csvtojson')

// const productsCsvPath = path.resolve(__dirname + '/data-generator/src', 'products.csv')
// const tagsCsvPath = path.resolve(__dirname + '/data-generator/src', 'tags.csv')
// const workersCsvPath = path.resolve(__dirname + '/data-generator/src', 'workers.csv')

const target = process.argv[2]

switch (target) {
  case 'products':
  case 'workers':
  case 'tags':

  const csvPath = path.resolve(__dirname + '/data-generator/src', `${target}.csv`)
    outputJson(csvPath, `${target}.json`)
    console.log(`output ${target} success !!`)
    break;
  default:
    console.error('target not found: ' + target)
    break;
}

function outputJson(csvFilePath, outputFilename) {
  csv()
  .fromFile(csvFilePath)
  .then((data)=>{
      fs.writeFileSync(path.resolve(__dirname + '/data-generator/dist', outputFilename), JSON.stringify(data))
  })
}
