const randomAnswer = (array) => {
  return array[Math.floor(Math.random() * array.length)] + ' ';
};

module.exports.random_ending = function() {
  answers = [
    'Wil je nog iets weten?',
    'Heb je nog een vraag?',
    'Stel me gerust nog een vraag.',
    'Zit je nog met een andere vraag?',
  ];
  return randomAnswer(answers);
};

module.exports.default_welcome_intent = function(name = '') {
  if (name !== '') name = ' ' + name;
  answers = [
    `Hallo${name}! Hier kan je vragen stellen over mij, Joachim Veulemans.`,
    `Goedendag${name}! Stel hier je vragen omtrent mijn CV.`,
    `Hey${name}! Ik ben klaar voor al je vragen over mijn CV.`,
  ];
  return randomAnswer(answers);
};

module.exports.default_fallback_intent = function() {
  answers = [
    'Ik begrijp het niet. Je kan me altijd iets vragen over mijn opleiding, hobby\'s of werkervaring.',
    'Dit kan ik je helaas niet zeggen. Contacteer me anders even voor een gesprek samen via joachim.veulemans@outlook.be',
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
    'Ik ben op 17 februari 1999 geboren.',
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

/*
      module.exports. = function() {
        return [
          '',
          '',
          ''
        ];
      };

      module.exports. = function() {
        return [
          '',
          '',
          ''
        ];
      };

      module.exports. = function() {
        return [
          '',
          '',
          ''
        ];
      };

      module.exports. = function() {
        return [
          '',
          '',
          ''
        ];
      };
*/
