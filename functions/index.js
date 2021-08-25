const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const corsHandler = cors({origin: true});
admin.initializeApp();

const db = admin.firestore();

// exports.helloWorld = functions.https.onRequest((req, resp) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   resp.send("Hello from Firebase!");
// });

exports.testRead = functions.https.onRequest((rqst, resp) => {
  return corsHandler(rqst, resp, () => {
    db.collection("test1")
        .get().then((col) => {
          const data = [];
          if (col.empty) {
            resp.status(200).send(data);
          }
          col.docs.forEach((doc, i) => {
            data.push(doc.data());
            if (i+1 === col.docs.length) {
              resp.status(200).send(data);
            }
          });
        }, (rej) => resp.send(rej))
        .catch((err) => {
          resp.status(500).send(err.message);
          functions.logger.error(err.message);
        });
  });
});

exports.testWrite = functions.https.onRequest((rqst, resp) => {
  return corsHandler(rqst, resp, () => {
    db.collection("test1")
        .add(rqst.body).then((snapshot) => {
          resp.send(snapshot);
        })
        .catch((err) => {
          resp.status(500).send(err.message);
          functions.logger.error(err.message);
        });
  });
});

exports.registerUser = functions.https.onRequest((rqst, resp) => {
  return corsHandler(rqst, resp, () => {
    admin.auth().createUser({
      uid: rqst.body.UserGuid,
      email: rqst.body.UserLogin,
      emailVerified: false,
      password: rqst.body.UserPassword,
      displayName: rqst.body.UserFirstName +
      " " + rqst.body.UserSurname,
    })
        .then((userRecord) => {
          resp.send({displayName: userRecord.displayName});
        }, (rej) => resp.send(rej)).catch((err) => {
          resp.status(500).send(err);
          console.log("Error creating new user:", err.message);
        });
  });
});

exports.getVehiclesCount = functions.https.onRequest((rqst, resp) => {
  return corsHandler(rqst, resp, () => {
    db.collection(rqst.body.organisation + "/Mst_Item/tables")
        .where("ItemCatg", "==", "VEHICLES")
        .get().then((col) => {
          const count = {val: 0};
          if (col.empty) {
            resp.status(200).send(count);
          }
          count.val = col.size;
          resp.status(200).send(count);
        }, (rej) => resp.send(rej))
        .catch((err) => {
          resp.status(500).send(err.message);
          functions.logger.error(err.message);
        });
  });
});

exports.getRevenue = functions.https.onRequest((rqst, resp) => {
  return corsHandler(rqst, resp, () => {
    db.collection(rqst.body.organisation + "/Trn_Revenue/tables")
        .limit(4)
        .get().then((col) => {
          const data = [];
          if (col.empty) {
            resp.status(200).send(data);
          }
          col.docs.forEach((doc, i) => {
            data.push(doc.data());
            if (i+1 === col.docs.length) {
              resp.status(200).send(data);
            }
          });
        }, (rej) => resp.send(rej))
        .catch((err) => {
          resp.status(500).send(err.message);
          functions.logger.error(err.message);
        });
  });
});

