const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4, //8
      min: 4
    },
    wordsPerSentence: {
      max: 4, //16
      min: 4
    },
});

 

  module.exports = lorem;