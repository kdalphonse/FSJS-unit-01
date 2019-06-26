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
    mediaType: "Song",
    citation: "Blah Blah Blah",
    album: "Animal",
    year:  "2010"
  },
  {
    quote: "Let there be light.",
    source: "God",
    citation: "Genesis 1:3"
  },
  {
    quote: "Sometimes I feel like an animal in a cage.  "
         + "I pace back and forth and look around "
         + "for something to sink my teeth into, "
         + "but nobody knows what's going on inside me.",
    source: "Blackie Lawless (W.A.S.P.)",
    mediaType: "Song",
    citation: "Rebel in the F.D.G.",
    album: "The Headless Children",
    year: "1989"
  },
  {
    quote: "That's one small step for man, one giant leap for mankind.",
    source: "Neil Armstrong",
    year: "1969"
  }
];

/***
  Return a random number from 0 to 'max' (inclusive)
***/

function getRandomFromZero(max) {
  return Math.floor(Math.random() * max);
}

/***
  Return a random quote object from the `quotes` array,
  except DO NOT return the same quote as the last time.
***/

var lastRandomQuoteVal = -1; // var to save the index of the last 'quotes' object returned
function getRandomQuote() {
  do {
    var randomNum = getRandomFromZero(quotes.length-1);
  }
  while(randomNum === lastRandomQuoteVal);

  lastRandomQuoteVal = randomNum;
  return quotes[randomNum];
}

/***
  Return a random RGB color
***/

function getRandomColor() {
  // use max rbg values of 200 to avoid getting too close to white (the text color)
  var red = getRandomFromZero(200);
  var green = getRandomFromZero(200);
  var blue = getRandomFromZero(200);

  var color = "RGB(" + red + "," + green + "," + blue + ")";
  return color;
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

  /*
  ** Optional Elements
  */

  if (quote.mediaType) {
    text += '<span class="citation">' + quote.mediaType + '</span>';
  }

  if (quote.citation) {
    if (quote.mediaType) {
      text += '<span class="citationWithMedia">'
    }
    else {
      text += '<span class="citation">'
    }
    text += quote.citation + '</span>';
  }

  // album is optional
  if (quote.album) {
    text += '<span class="album">' + quote.album + '</span>';
  }

  // quote is optional
  if (quote.year) {
    text += '<span class="year">' + quote.year + '</span>';
  }
  text += '</p>'

  var theQuoteBox = document.getElementById("quote-box");
  theQuoteBox.innerHTML = text;

  /*
  ** Change background color.  Thanks to: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
  */
  document.body.style.backgroundColor = getRandomColor();
}



/***
  Re-invoke printQuote when the "Show another quote" button is clicked
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/***
  Re-invoke printQuote every 10 seonds instead of having to click the button
  (We'll leave the button in case someone's in a hurry)
***/

window.setInterval(printQuote, 10000);