/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote: "q1",
    source: "s1",
    citation: "",
    year: ""
  },
  {
    quote: "q2",
    source: "s2",
    citation: "c2",
    year: ""
  },
  {
    quote: "q3",
    source: "s3",
    citation: "c3",
    year: "y3"
  },
  {
    quote: "q4",
    source: "s4",
    citation: "",
    year: ""
  },
  {
    quote: "q5",
    source: "s5",
    citation: "",
    year: "y5"
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * 5);
  return quotes[randomNum];
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var quote = getRandomQuote();
  console.log(quote);

  //<p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
  //<p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>

  var text = '<p class="quote">' + quote.quote + '</p>';
  text += '<p class="source">' + quote.source + '</p>'
  var theQuoteBox = document.getElementById("quote-box");
  theQuoteBox.innerHTML = text;
}




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.