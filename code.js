var authorD = document.getElementById("randomAuth");
var textD = document.getElementById("randomTxt");
const authors = [
  "Haruki Murakami",
  "Virginia Woolf",
  "Paulo Coelho",
  "George Eliot",
  "Jack Kerouac",
  "Emily Dickinson",
  "Jodi Picoult",
  "Aristotle",
  "Sylvia Plath",
  "C.S. Lewis",
  "Maya Angelou",
  "F. Scott Fitzgerald",
  "Anne Frank",
  "Stephen King",
  "Dr. Seuss",
  "Ralph Waldo Emerson",
  "William Shakespeare",
  "Charlotte Brontë",
  "Zora Neale Hurston",
  "Oscar Wilde"
];

const quotes = [
  "Pain is inevitable. Suffering is optional.",
  "You cannot find peace by avoiding life.",
  "Tears are words that need to be written.",
  "It is never too late to be what you might have been.",
  "One day I will find the right words, and they will be simple.",
  "That it will never come again is what makes life so sweet.",
  "You can always edit a bad page. You can’t edit a blank page.",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  "Let me live, love, and say it well in good sentences.",
  "Don’t let your happiness depend on something you may lose.",
  "There is no greater agony than bearing an untold story inside you.",
  "And so we beat on, boats against the current, borne back ceaselessly into the past.",
  "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
  "Get busy living or get busy dying.",
  "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
  "Imitation is suicide.",
  "This above all: to thine own self be true.",
  "Life appears to me too short to be spent in nursing animosity or registering wrongs.",
  "She has waited all her life for something, and it has killed her when it found her.",
  "Nowadays people know the price of everything and the value of nothing."
];
var lengthArr = quotes.length;
var before = null;
function randomText(){
    while(1){
        var Random = Math.floor(Math.random()*lengthArr);
        if(Random != before){
            before = Random;
            break;
        }
    }
textD.innerHTML = quotes[Random];
authorD.innerHTML = authors[Random];
    
}