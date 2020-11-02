const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDlxIr1v_A6gbVfTiJ3_NgDmXb4vgsqlCU",
    authDomain: "chat-app-43d57.firebaseapp.com",
    databaseURL: "https://chat-app-43d57.firebaseio.com",
    projectId: "chat-app-43d57",
    storageBucket: "chat-app-43d57.appspot.com",
    messagingSenderId: "750329812184",
    appId: "1:750329812184:web:a4858257ba1b607b7133ad",
    measurementId: "G-76F0YFJK0R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name)
  firebase.auth().onAuthStateChanged((res) => {
    console.log(res)
    if (res) {
      if (res.emailVerified) {
        model.currentUser = {
          displayName: res.displayName,
          email: res.email
        }
        console.log(model.currentUser)
        view.setActiveScreen('chatPage')
      } else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })
  // firestoreQueries()
}
window.onload = init

// firestoreQueries = async () => {
//   // get one document
//   const response = await firebase.firestore()
//   .collection('users')
//   .doc('LvQwa20mBPIArX1RYL30').get()
//   const user = getDataFromDoc(response)
//   console.log(user)
//   // get many document
//     const response = await firebase.firestore()
//     .collection('users').where('phones', 'array-contains', '0123')
//     .get()
//     const users = getDataFromDocs(response.docs)
//     console.log(users)
//   // add new document
//   const dataToAdd = {
//     name: 'Nguyen Thi B',
//     age: 20
//   }
//   firebase.firestore().collection('users')
//   .add(dataToAdd)
//   // update document
//     const dataToUpdate = {
//       name: 'abcxyz',
//       address: 'asdasd',
//       phones: firebase.firestore.FieldValue.arrayUnion('')
//     }
//     const docID = "FkuwqKF8yuJtmbcAjj8u"
//     firebase.firestore().collection('users')
//     .doc(docID).update(dataToUpdate)
//   // delete document
//   const docId = 'wTRKk1s4wUmaGrrqCNWe'
//   firebase.firestore().collection('users')
//   .doc(docId).delete()
// }
getDataFromDoc = (res) => {
  const data = res.data()
  data.id = res.id
  return data
}
getDataFromDocs = (docs) => {
  return docs.map(getDataFromDoc)
  // const arr = []
  // for(const oneDoc of docs) {
  //   arr.push(getDataFromDoc(oneDoc))
  // }
  // return arr
}


validateEmail = (email) => {
  let emailPattern = /^[a-zA-Z0-9._-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}