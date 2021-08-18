import * as functions from "firebase-functions";
// import firestore = require("firebase/firestore");
import admin = require("firebase-admin");

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// exports.testOncall = functions.https.onCall((data, context) => {
//   return admin.database().ref("test1").push({
//   })
//       .then(() => {
//         console.log("New Person Added");
//         return "Done Successfully";
//       })
//       .catch((error) => {
//         throw new functions.https.HttpsError
// ("unknown", error.message, error);
//       });
// });

exports.testOnReq = functions.https.onRequest((req, resp) => {
  return admin.database().ref("test1").push(req.body)
      .then(() => {
        console.log("New Person Added");
        resp.send("New Person Added");
      })
      .catch((error) => {
        throw new functions.https.HttpsError("unknown", error.message, error);
      });
});

// exports.sendOTPcode = functions.https.onRequest((request, response) => {
//   const number = request.body.number;
//   const code = request.body.code;
//   sendCode(code, number).then((res) => {
//     response.send(res);
//   });
// });

// exports.addUser = functions.https.onCall((data, context) => {
//   return
//   auth.createUser({ email: data.email, password: data.password }).then(
//       (user) => {
//         return firestore
//             .collection("myTest")
//             .doc(user.uid)
//             .set(data)
//             .then(
//                 () => {
//                   console.log("did everything you asked");
//                   return "success";
//                 },
//                 (error) => {
//                   throw new functions.https.HttpsError(
// "unknown", error.message);
//                 }
//             );
//       },
//       (error) => {
//         throw new functions.https.HttpsError("unknown", error.message);
//       }
//   );
// });
