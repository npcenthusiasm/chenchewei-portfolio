
const db = require('./db')

const firestore = db.firestore()

const jsonData = require('./data-generator/dist/all.json')

jsonData.forEach(data => {
  writeUserData(data)
})

async function writeUserData(data) {
  // Add a new document in collection "cities"
  const id = data.id
  firestore.collection("testProducts").doc(id + '').set(data)
    .then(() => {
      console.log(`${id}: Document successfully written!`);
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
