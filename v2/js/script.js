
const antwoorden = ["It is certain.", "It is decidedly so.", "Without a doubt.",
 "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.",
 "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.",
  "Ask again later.", "Better not tell you now.", "Cannot predict now.",
  "Concentrate and ask again.", "Don't count on it.", "My reply is no.",
  "My sources say no.", "Outlook not so good.", "Very doubtful."];


const nameClass = document.querySelector('p.antwoord');
const selectButton = document.querySelector('button');
const selectBall = document.querySelector('div.ball');
const ball = document.querySelector('.ball');
let tries = 0;

// setTimeout func credit: https://www.youtube.com/watch?v=ubB0zx8xZ-s
// keycode/ keyboard events credit: https://www.youtube.com/watch?v=VBVOXTgXX2U

// Function drawBall voegt classes 'shake'  en 'fadeIn' toe aan elementen voor css.
// Het haalt 'tries' met 1 omhoog elke kker dat de functie runt.
// Het kiest een random getal en rond dit af. If statement kijkt naar:
//  is 'tries' onder de 5 voeg dan het gekozen antwoord toe in de browser of keyCode voor enter gepressed
// het wacht daarna 1 seconde om de classes weg te halen met setTimeout.
// als 'amountTries' gelijk of hoger is dan 5 word de text 'Wacht 5 seconden'
// en na 5 seconden word het 'Probeer opnieuw'

function drawBall(key) {
  selectBall.classList.add('shake');
  nameClass.classList.add('fadeIn');
  let amountTries = ++tries;
  let randomGetal = Math.random() * antwoorden.length;
  afrondGetal = Math.floor(randomGetal);

  if (amountTries < 5 || key.keyCode == "Enter") {
    nameClass.textContent = antwoorden[afrondGetal];

     setTimeout(function() {
  selectBall.classList.remove('shake');
  nameClass.classList.remove('fadeIn');
}, 1000)

  } else if (amountTries >= 5) {
    nameClass.textContent = ('Wacht 5 seconden');
    nameClass.classList.remove('fadeIn');

    setTimeout(function() {
      tries = 0;
      nameClass.textContent = ('Probeer opnieuw');
    }, 5000)

  } else {
    console.log('error');
  }
};

selectButton.addEventListener('click', drawBall);
