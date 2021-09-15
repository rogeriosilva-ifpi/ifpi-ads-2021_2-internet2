import * as admin from 'firebase-admin'

var serviceAccount = require("../../../../app-filmes-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore()