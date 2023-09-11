// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import {setGlobalOptions} from "firebase-functions/v2";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";


// Set the maximum instances to 10 for all functions
setGlobalOptions({maxInstances: 10});

admin.initializeApp();


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const makeEmailLowercase = functions.firestore
  .document("Users/{userId}")
  .onCreate((snap, context) => {
    const data = snap.data();
    const email = data.email.toLowerCase();
    return snap.ref.set({email}, {merge: true});
  });

