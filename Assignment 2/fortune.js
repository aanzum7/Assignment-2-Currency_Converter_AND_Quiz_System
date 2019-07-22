var fortunes = [
  "If you want to convert Currency ? Click On Currency Converter Button!",
  "Are you bored ?Want To Play Quiz Game ?Click On Quiz Button!"
]

var fortune1 = document.getElementById('fortune1');

fortuneGenerator();

var changeAfter = setInterval(fortuneGenerator,10000);


function fortuneGenerator() {
  fortune1.textContent = fortunes[randomGenarator()];
}

function randomGenarator() {
  return Math.floor(Math.random() * fortunes.length);
}