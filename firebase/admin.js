var admin = require("firebase-admin");

var serviceAccount = require("./firebase-keys.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

export const firestore = admin.firestore()