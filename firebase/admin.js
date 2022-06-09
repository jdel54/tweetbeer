var admin = require("firebase-admin");

var serviceAccount = JSON.parse(process.env.FIREBASE_KEYS)

console.log(process.env.FIREBASE_KEYS)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

export const firestore = admin.firestore()