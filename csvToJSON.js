const path = require('path')
const fs = require('fs')
const csvFilePath = path.resolve(__dirname, 'products.csv')
console.log('csvFilePath: ', csvFilePath);
const csv = require('csvtojson')


csv()
.fromFile(csvFilePath)
.then((data)=>{
  // console.log(jsonObj);
  // const header = data[0]
    // jsonObj = jsonObj.map(filed => {
    //   return {
    //     ...it,
    //     img: (!it.category || !it.title) ? '' : require(`~/assets/img/${it.category}/${it.title}.jpg`)
    //   }
    // })
    fs.writeFileSync(path.resolve(__dirname, 'products.json'), JSON.stringify(data))
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})
 
// async function csvToJSON () {
//   const jsonArray = await csv().fromFile(csvFilePath);
//   return jsonArray
// }

// const jsonArray = await csvToJSON()
// console.log('jsonArray: ', jsonArray);
// Async / await usage
// console.log('jsonArray: ', jsonArray)