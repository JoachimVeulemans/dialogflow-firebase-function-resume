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
  conv.ask(intents.random_ending_first());
});

app.intent('default_fallback_intent', (conv) => {
  conv.add(intents.default_fallback_intent());
  conv.ask(intents.random_ending());
});

app.intent('name_permission_respond', (conv, params, permissionGranted) => {
  if (!permissionGranted) {
    conv.add('Geen probleem.');
    conv.add(intents.default_welcome_intent());
  } else {
    conv.user.storage.userName = conv.user.name.display.split(' ')[0];
    conv.add(intents.default_welcome_intent(conv.user.storage.userName));
  }
  conv.ask(intents.random_ending_first());
});

app.intent('delete_user_data', (conv) => {
  conv.user.storage.userName = null;
  conv.add(intents.delete_user_data());
  conv.add(intents.no_questions_left());
  conv.close('Tot ziens!');
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

app.intent('future_job', (conv) => {
  conv.add(intents.future_job());
  conv.ask(intents.random_ending());
});

app.intent('no_questions_left', (conv) => {
  conv.add(intents.no_questions_left());
  conv.close('Tot ziens!');
});

app.intent('yes_question_left', (conv) => {
  conv.ask(intents.random_ending());
});

app.intent('private_info', (conv) => {
  conv.add(intents.private_info());
  conv.ask(intents.random_ending());
});

app.intent('residence', (conv) => {
  conv.add(intents.residence());
  conv.ask(intents.random_ending());
});

app.intent('school_experience', (conv) => {
  conv.add(intents.school_experience());
  conv.ask(intents.random_ending());
});

app.intent('work_experience', (conv) => {
  conv.add(intents.work_experience());
  conv.ask(intents.random_ending());
});

app.intent('hobbys', (conv) => {
  conv.add(intents.hobbys());
  conv.ask(intents.random_ending());
});

app.intent('contact_information', (conv) => {
  conv.add(intents.contact_information());
  conv.ask(intents.random_ending());
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
