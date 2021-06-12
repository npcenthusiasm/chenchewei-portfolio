const path = require('path')
const fs = require('fs')
const csvFilePath = path.resolve(__dirname + '/data-generator/src', 'products.csv')
console.log('csvFilePath: ', csvFilePath);
const csv = require('csvtojson')


csv()
.fromFile(csvFilePath)
.then((data)=>{
    fs.writeFileSync(path.resolve(__dirname + '/data-generator/dist', 'products.json'), JSON.stringify(data))
})
