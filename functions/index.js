'use strict';

const {dialogflow, BasicCard, Permission, Suggestions, Carousel, Image} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({debug: true});
const intents = require('./intents');

app.intent('Default Welcome Intent', (conv) => {
    conv.user.storage.userName = null;
    const name = conv.user.storage.userName;
    if (!name) {
      // Asks the user's permission to know their name, for personalization.
      conv.ask(new Permission({
        context: 'Hi there, to get to know you better',
        permissions: 'NAME',
      }));
    } else {
      conv.ask(`Hi again, ${name}. What's your favorite color?`);
    }
  });

  // Handle the Dialogflow intent named 'actions_intent_PERMISSION'. If user
// agreed to PERMISSION prompt, then boolean value 'permissionGranted' is true.
app.intent('actions_intent_PERMISSION', (conv, params, permissionGranted) => {
    if (!permissionGranted) {
      // If the user denied our request, go ahead with the conversation.
      conv.ask(intents.welcome());
    } else {
      // If the user accepted our request, store their name in
      // the 'conv.user.storage' object for future conversations.
      conv.user.storage.userName = conv.user.name.display;
      conv.ask(`Thanks, ${conv.user.storage.userName}. ` +
        `What's your favorite color?`);
    }
  });

app.intent('Age', (conv) => {
    const birth = Date.now() - new Date(1999, 2, 17);
    const age = Math.abs((new Date(birth)).getUTCFullYear() - 1970);

    let answers = [`Mijn leeftijd is ${age}.`, `Ik ben ${age} jaar oud.`];

    conv.add(answers[getRandomIndexFromArray(answers.length)]);
    conv.ask(randomAsk());
});

const randomAsk = () => {
    let questions = ['Wil je nog iets weten?', 'Heb je nog een vraag?', 'Stel me gerust nog een vraag.'];
    return questions[getRandomIndexFromArray(questions.length)];
};

const getRandomIndexFromArray = (length) => {
    return Math.floor(Math.random() * length);
};

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
