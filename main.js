var count = document.getElementById('count');
var input = document.getElementById('input');
input.addEventListener('keyup', function(e){
      Count(e.target.value);
  });
  function Count(text) {
    var text = input.value;
    var wordCount = 0;
    for (var i = 0; i <= text.length; i++) {
      if (text.charAt(i) == ' ') {
        wordCount++;
      }
    }
    count.innerText = wordCount;
  }