// const axios = require('axios');

// //const { database } = require("firebase-admin");

// // Replace 'path/to/firebase-adminsdk.json' with the actual path to your Firebase Admin SDK JSON file
// //const serviceAccount = require('./firebase-adminsdk.json');
// const firebaseConfig = {
//   apiKey: "AIzaSyCQTzUW4utpFvndjiZB3QesdpqlNNhWiLQ",
//   authDomain: "rd-auth-93aa9.firebaseapp.com",
//   projectId: "rd-auth-93aa9",
//   databaseURL: "https://rd-auth-93aa9-default-rtdb.firebaseio.com/",
//   storageBucket: "rd-auth-93aa9.appspot.com",
//   messagingSenderId: "194238095338",
//   appId: "1:194238095338:web:70311812706a29b3da5c93",
// };

// // Initialize Firebase
// function getEncryptedKey(folderName, callback) {
//     const databaseURL = `${firebaseConfig.databaseURL}/${folderName}.json`;
  
//     // Make a GET request to retrieve data
//     axios.get(databaseURL)
//       .then(response => {
//         const data = response.data;
//         if (data && data.encryptedKey) {
//           callback(data.encryptedKey);
//         } else {
//           callback(null);
//         }
//       })
//       .catch(error => {
//         console.error('Error retrieving data:', error);
//         callback(null);
//       });
//   }
  
//   module.exports = getEncryptedKey;

const axios = require('axios');

const databaseURL = 'https://rd-auth-2f9e4-default-rtdb.firebaseio.com/';
const keysFolder = 'Keys';

async function getEncryptedKey(folderName) {
  const databasePath = `${keysFolder}/${folderName}.json`;
  const databaseURLWithFolder = `${databaseURL}${databasePath}`;

  try {
    // Make a GET request to retrieve data
    const response = await axios.get(databaseURLWithFolder);

    // Extract the value directly, as the data structure is a simple key-value pair
    const encryptedKey = response.data;

    if (encryptedKey) {
      console.log('Encrypted Key from Firebase:', encryptedKey);
      return encryptedKey;
    } else {
      console.log('Encrypted Key not found in Firebase.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error.message);
    throw error; // Propagate the error for proper handling in the calling function
  }
}

module.exports = getEncryptedKey;

// Example usage:
const folderNameToRetrieve = 'a6e4dc4aa7af9dba61b84681ed6cfc97c1f03cc378bc61b0d3322e24b7a96bf2'; // Replace with the actual folderName
getEncryptedKey(folderNameToRetrieve, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Value for ${folderNameToRetrieve}:`, result);
  }
});


