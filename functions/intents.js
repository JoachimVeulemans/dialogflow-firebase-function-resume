const randomAnswer = (array) => {
  return array[Math.floor(Math.random() * array.length)] + ' ';
};

module.exports.random_ending = function() {
  answers = [
    'Wil je nog iets weten?',
    'Heb je nog een vraag?',
    'Indien je één hebt, wat is je volgende vraag?',
    'Zit je nog met een andere vraag?',
    'Weet je nog iets om aan mij te vragen?',
  ];
  return randomAnswer(answers);
};

module.exports.random_question = function() {
  answers = [
    'Wat wil je weten?',
    'Wat is je vraag?',
    'Wat is je volgende vraag?',
    'Wat is de vraag waar je nog mee zit?',
    'Wat ligt er op je lever?',
  ];
  return randomAnswer(answers);
};

module.exports.random_ending_first = function() {
  answers = [
    'Wat wil je weten?',
    'Wat is je vraag?',
    'Wat wil je van mij weten?',
  ];
  return randomAnswer(answers);
};

module.exports.default_welcome_intent = function() {
  answers = [
    `Hier kan je vragen stellen over mij, Joachim Veulemans.`,
    `Stel hier je vragen omtrent mijn CV.`,
    `Ik ben klaar voor al je vragen over mijn CV.`,
  ];
  return randomAnswer(answers);
};

module.exports.prefix_name = function(name) {
  answers = [
    `Goede vraag ${name}!`,
    `Even denken ${name}...`,
    `Dat kan ik je zeggen ${name}.`,
  ];
  return randomAnswer(answers);
};

module.exports.prefix_name_first = function(name) {
  answers = [
    `Hallo ${name}!`,
    `Goedendag ${name}!`,
    `Hey ${name}!`,
  ];
  return randomAnswer(answers);
};

module.exports.default_fallback_intent = function() {
  answers = [
    'Ik begrijp het niet. Je kan me altijd iets vragen over mijn opleiding, hobby\'s of werkervaring.',
    'Dit kan ik je helaas niet zeggen. Contacteer me anders even voor een gesprek samen via joachim.veulemans@outlook.be',
    'Ik ben nog niet slim genoeg. Vraag me anders iets makkelijker zoals hoe oud ik ben.',
  ];
  return randomAnswer(answers);
};

module.exports.delete_user_data = function() {
  answers = [
    'We hebben al jouw persoonlijke data verwijderd.',
  ];
  return randomAnswer(answers);
};

module.exports.emotional_development = function() {
  answers = [
    'Tijdens mijn opleiding bij de Hogeschool PXL was ik tutor voor andere studenten binnen mijn opleiding. Enkele vakken die ik behandelde waren Web Essentials, Java Essentials en Data.',
  ];
  return randomAnswer(answers);
};

module.exports.age = function(age) {
  answers = [
    `Ik ben op 17 februari 1999 geboren.`,
    `Mijn leeftijd is ${age} jaar.`,
    `Ik ben ${age} jaar oud.`,
  ];
  return randomAnswer(answers);
};

module.exports.hobbys = function() {
  answers = [
    'Ik ben een bestuurslid bij het Sinksencomité dat jaarlijks koersen, VIP cafés, quizzen, loopwedstrijden etc. organiseerd.',
  ];
  return randomAnswer(answers);
};

module.exports.future_job = function() {
  answers = [
    `Mijn ideale job is een omgeving met fijne, enthousiaste collega's.`,
  ];
  return randomAnswer(answers);
};

module.exports.no_questions_left = function() {
  answers = [
    `Bedankt om met mij te praten! Hopelijk spreken we elkaar in het echt ook eens!`,
    `Bedankt om deze ervaring even te proberen! Hopelijk spreken we elkaar in het echt ook eens!`,
  ];
  return randomAnswer(answers);
};

module.exports.private_info = function() {
  answers = [
    `Oeps, je probeert me iets te goed te leren kennen! Hier kan ik geen antwoord op geven...`,
  ];
  return randomAnswer(answers);
};

module.exports.residence = function() {
  answers = [
    `Ik ben momenteel woonachtig te Scherpenheuvel.`,
    `Ik woon momenteel in Scherpenheuvel.`,
  ];
  return randomAnswer(answers);
};

module.exports.school_experience = function() {
  answers = [
    `Ik zit momenteel op de Hogeschool PXL waar ik bij het departement PXL-DIGITAL, de opleiding toegepaste informatica volg. Mijn afstudeerrichting is applicatieontwikkeling met een nadruk op artificiële intelligentie en robotica.`,
    `Tijdens het middelbaar heb ik op KSDiest gezeten waar ik de opleiding wetenschappen wiskunde 6 uur gevolgd heb. Dit was van 2011 tot 2017.`,
  ];
  return randomAnswer(answers);
};

module.exports.work_experience = function() {
  answers = [
    `Ik ben tijdens mijn studie werkzaam geweest bij Edu-Tech als (Lead) Frontend Developer. We ontwikkelden een leerplatform in Angular en de D-taal.`,
    `Naast mijn studies was ik enkele jaren werkzaam als productiemedewerker bij Brouwerij Anders!. Ik overzag de uiteindelijke kwaliteitscontrole van het product tijdens het monitoren van de efficiëntie van het productieproces.`,
    `Vooraf ik mijn studies bij Hogeschool PXL gestart was, werkte ik als zelfstandige ondernemer. Ik was gespecialiseerd in het verhuren en opstellen van licht en geluid bij verschillende evenementen zoals feesten, fuiven, verjaardagen etc.`,
  ];
  return randomAnswer(answers);
};

module.exports.contact_information = function() {
  answers = [
    `Je kan me altijd contacteren op joachim.veulemans@outlook.be.`,
  ];
  return randomAnswer(answers);
};
