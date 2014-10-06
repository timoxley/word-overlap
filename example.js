(function() {
  'use strict';

  var overlap = require('./overlap'),
    sentence1 = 'A Hitchhiking Meetup in Betelgeuse by Ford Prefect',
    sentence2 = 'A hitchhiking meetup meetup by the hitchhiker';

  console.log(overlap.list(sentence1, sentence2));

  console.log(overlap.list(sentence1, sentence2, {
    ignoreCase: true
  }));

  console.log(overlap.list(sentence1, sentence2, {
    ignoreCase: true,
    minWordLength: 2
  }));

  console.log(overlap.list(sentence1, sentence2, {
    ignoreCase: true,
    minWordLength: 2,
    ignoreCommonWords: true
  }));

})();