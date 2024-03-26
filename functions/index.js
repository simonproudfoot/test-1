/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();

exports.submit = onRequest((request, response) => {
    return cors(request, response, () => {
        const { email, project } = request.body;

        if (!email || !project) {
            response.status(400).send('Missing parameters');
            return;
        }

        const db = admin.firestore();
        db.collection('app-validation').add({ email, project })
            .then(() => {
                response.status(200).send('Data added successfully');
            })
            .catch((error) => {
                logger.error('Error adding data to Firestore', error);
                response.status(500).send('Error adding data to Firestore');
            });
    });
});
