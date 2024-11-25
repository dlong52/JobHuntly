const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAcount")
const serviceAccount = require("./jobhuntly-a8600-firebase-adminsdk-53hy3-d540d265bc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
