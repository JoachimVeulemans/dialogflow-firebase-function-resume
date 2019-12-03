'use strict';

const {dialogflow, BasicCard, Permission, Suggestions, Carousel, Image} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({debug: true});
const intents = require('./intents');

app.intent('default_welcome_intent', (conv) => {
  const name = conv.user.storage.userName;
  if (!name) {
    conv.add(new Permission({
      permissions: 'NAME',
    }));
  } else {
    conv.add(intents.default_welcome_intent(name));
  }
  conv.ask(intents.random_ending());
});

app.intent('name_permission_respond', (conv, params, permissionGranted) => {
  if (!permissionGranted) {
    conv.add('Geen probleem');
    conv.add(intents.default_welcome_intent());
  } else {
    conv.user.storage.userName = conv.user.name.display.split(' ')[0];
    conv.add(intents.default_welcome_intent(conv.user.storage.userName));
  }
  conv.ask(intents.random_ending());
});

app.intent('age', (conv) => {
  const birth = Date.now() - new Date(1999, 2, 17);
  const age = Math.abs((new Date(birth)).getUTCFullYear() - 1970);

  conv.add(intents.age(age));
  conv.ask(intents.random_ending());
});

app.intent('emotional_development', (conv) => {
  conv.add(intents.emotional_development());
  conv.ask(intents.random_ending());
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
