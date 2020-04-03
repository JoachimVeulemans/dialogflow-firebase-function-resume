'use strict';

const {dialogflow, Permission} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({debug: true});
const intents = require('./intents');

const prefixNameIfNeeded = (conv) => {
  const name = conv.user.storage.userName;
  const rand = Math.floor(Math.random() * 5);
  if (name && (rand % 2 == 0)) {
    return intents.prefix_name(name);
  }
  return '';
};

app.intent('default_welcome_intent', (conv) => {
  const name = conv.user.storage.userName;
  if (!name) {
    conv.add(new Permission({
      permissions: 'NAME',
    }));
  } else {
    conv.add(intents.prefix_name_first(name) + ' ' + intents.default_welcome_intent());
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

  conv.add(prefixNameIfNeeded(conv) + intents.age(age));
  conv.ask(intents.random_ending());
});

app.intent('emotional_development', (conv) => {
  conv.add(prefixNameIfNeeded(conv) + intents.emotional_development());
  conv.ask(intents.random_ending());
});

app.intent('future_job', (conv) => {
  conv.add(prefixNameIfNeeded(conv) + intents.future_job());
  conv.ask(intents.random_ending());
});

app.intent('no_questions_left', (conv) => {
  conv.add(intents.no_questions_left());
  conv.close('Tot ziens!');
});

app.intent('yes_question_left', (conv) => {
  conv.ask(intents.random_question());
});

app.intent('private_info', (conv) => {
  conv.add(prefixNameIfNeeded(conv) + intents.private_info());
  conv.ask(intents.random_ending());
});

app.intent('residence', (conv) => {
  conv.add(prefixNameIfNeeded(conv) + intents.residence());
  conv.ask(intents.random_ending());
});

app.intent('school_experience', (conv) => {
  conv.add(prefixNameIfNeeded(conv) + intents.school_experience());
  conv.ask(intents.random_ending());
});

app.intent('work_experience', (conv) => {
  conv.add(prefixNameIfNeeded(conv) + intents.work_experience());
  conv.ask(intents.random_ending());
});

app.intent('hobbys', (conv) => {
  conv.add(prefixNameIfNeeded(conv) + intents.hobbys());
  conv.ask(intents.random_ending());
});

app.intent('contact_information', (conv) => {
  conv.add(prefixNameIfNeeded(conv) + intents.contact_information());
  conv.ask(intents.random_ending());
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
