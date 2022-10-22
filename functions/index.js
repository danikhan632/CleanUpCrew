const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// exports.getCurrentFeed = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", {structuredData: true});


//       response(200).send(resp);
//   });
  
exports.getCurrentFeed = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random()* 100);
  response.header("Access-Control-Allow-Origin", "*")
  const data = {
    title: "pothole",
    "img_url": "https://e3.365dm.com/19/03/2048x1152/skynews-potholes-rules-roadworks_4598866.jpg"
}
  response.send(data);
});



  exports.getCurrentFeed_new = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    return response.set({ 'Access-Control-Allow-Origin': '*' }).sendStatus(200)
  });


exports.addMessage = functions.https.onRequest((req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' }).sendStatus(200)
  cors()(req, res, () => {
    return res.json({'Access-Control-Allow-Origin': '*' ,status: 'ok'});
  });
});

exports.test_message_firebase_json = functions.https.onRequest((req, res) => {
  const message = req.body.data.message;
  res.status(200).json({
    data: {
      message: message
    }
  });
});



exports.rand_num = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random()* 100);
    response.header("Access-Control-Allow-Origin", "*")
    const data = {"data":number}
    response.send(data);
});

