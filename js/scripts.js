$(document).ready(function() {
  $('#container form').submit(function(event) {
    event.preventDefault();
    var sentence = [];
    var rawValue = $('input#userInput').val();
    $('#showText').text(rawValue);
    sentence.push(rawValue);

    var result = sentence.map(function(word) {
      word.split(' ', 3);
      console.log('ji');
      sentence.push(word);
    });
    console.log(result);
  });
});
