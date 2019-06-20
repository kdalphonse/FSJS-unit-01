/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  Array of quote objects.  
  All objects must contain:
    quote -  quote we might display
    source - source attribution for the quote
  Additionally, each object MAY contain:
    citation - where the quote came from
    year - when the quote originated
***/
var quotes = [
  {
    quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    source: "Albert Einstein"
  },
  {
    quote: "Blah blah blah",
    source: "Ke$ha",
    citation: "Blah Blah Blah",
    year:  "2010"
  },
  {
    quote: "Let there be light.",
    source: "God",
    citation: "Genesis 1:3"
  },
  {
    quote: "Sometimes I feel like an animal in a cage<br>"
         + "I pace back and forth and look around<br>"
         + "For something to sink my teeth into<br>"
         + "But nobody knows what's going on inside me",
    source: "Blackie Lawless (W.A.S.P.)",
    citation: "Rebel in the F.D.G.",
    year: "1989"
  },
  {
    quote: "That's one small step for man, one giant leap for mankind.",
    source: "Neil Armstrong",
    year: "1969"
  }
];


/***
  Return a random quote object from the `quotes` array,
  except DO NOT return the same quote as the last time.
***/

var lastRandom = -1; // var to save the index of the last 'quotes' object returned
function getRandomQuote() {
  do {
    var randomNum = Math.floor(Math.random() * quotes.length);
  }
  while(randomNum === lastRandom);

  lastRandom = randomNum;
  return quotes[randomNum];
}


/***
  - Get a random quote object from the quotes array
  - Generate HTML to format the quote object
  - Output the formatted HTML to the 'quote-box' div of index.html

  Sample Output:
  <p class="quote">Blah Blah Blah</p>
  <p class="source">Ke$ha<span class="citation">Blah blah blah</span><span class="year">2010</span></p>
***/

function printQuote() {
  var quote = getRandomQuote();


  var text = '<p class="quote">' + quote.quote + '</p>';
  text += '<p class="source">' + quote.source;

  // citation is optional
  if (quote.citation) {
    text += '<span class="citation">' + quote.citation + '</span>';
  }

  // quote is optional
  if (quote.year) {
    text += '<span class="year">' + quote.year + '</span>';
  }
  text += '</p>'

  var theQuoteBox = document.getElementById("quote-box");
  theQuoteBox.innerHTML = text;
}



/***
  Re-invoke printQuote when the "Show another quote" button is clicked
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
