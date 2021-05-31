
const db = require('./db')

const firestore = db.firestore()

const logo = require('./all.json')

logo.forEach(data => {
  // writeUserData(data)
})

async function writeUserData(data) {
  // Add a new document in collection "cities"
  firestore.collection("testProducts").doc(data.id).set(data)
    .then(() => {
      console.log(`${data.id}: Document successfully written!`);
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
