const workerMap = require('./model/workerMap')
const workerJson = require('./data-generator/dist/workers.json')

// const workerJson = JSON.parse(workerJsonData || '[]')
// console.log('workerJson: ', workerJson);

workerJson.forEach(it => {
  const [cname, ename] = [it.中文, it.英文]
  // console.log('cname: ', cname);
  // console.log('ename: ', ename);
  findWorker(cname, ename)

})

let count = 0
function findWorker(cname, ename) {

  for (const [key, value] of workerMap) {
    // console.log(value.ename)
    // console.log(value.cname)
    if (value.cname === cname && value.ename === ename) {
      console.log('ok !!')
      return
    }
  }

  // console.log(cname, ename, 'need update !!')
  console.log(`workerMap.set('??', { ename: '${ename}', cname: '${cname}' })`)
}
