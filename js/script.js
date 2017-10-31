function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function setRandomColor() {
    document.body.style.backgroundColor = getRandomColor();
  }

//refresh quote every 10 seconds
window.setInterval(printRandomQuote,10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printRandomQuote, false);


dontRepeatArray = [];

//Array of quotes
quotes = [
{
    quote: "Strive not to be a success, but rather to be of value.",
    source: "Albert Einstein",
    citation: false,
    year: false,
    tags: ['inspirational', 'motivational', 'incomplete']
},

{
    quote: "Get off treehouse and do some work.",
    source: "Jon's Boss",
    citation: "Office Interaction",
    year: 2017,
    tags: ['office', 'humour', 'complete']
},

{
    quote: "This is really frying my brain.",
    source: "Jon",
    citation: "Office Interaction",
    year: 2017,
    tags: ['office', 'humour', 'complete']
},

{
    quote: "We become what we think about.",
    source: "Earl Nightingale",
    citation: false,
    year: false,
    tags: ['inspirational', 'motivational', 'incomplete']
},

{
    quote: "Winning isn’t everything, but wanting to win is.",
    source: "Vince Lombardi",
    citation: "Quoted in Esquire Magazine",
    year: 1962,
    tags: ['inspirational', 'motivational', 'complete']
}
];

var arrayLength = quotes.length;
console.log(arrayLength);

//Function to create a random number equal to the array length

function randomNumber(upper) {
    return Math.floor( Math.random() * upper);
}
console.log(randomNumber(arrayLength));

//Function to return a random quote from the quotes array

var draNumber = [];

function getRandomQuote(number){
        
    if(draNumber.length == arrayLength) {
        
            dontRepeatArray = [];
            draNumber = [];
        
    }

    if(draNumber.indexOf(number) >= 0) {

        return getRandomQuote(randomNumber(arrayLength));
    } else {
        draNumber.push(number);  
    }
    
    return quotes[number];
}


//console log's to test output - ignore
console.log(quotes[1].quote);
console.log(quotes[2]);
console.log(getRandomQuote(randomNumber(arrayLength)));

//Function to create print quote

function printQuote(){
 
    function citationHasValue(argument){
        if (argument !== false){
        return '<span class="citation">' + argument + '</span>'
        }else{
            return ''
        }
    }

    function yearHasValue(argument){
        if (argument !== false){
        return '<span class="year">' + argument + '</span>'
        }else{
            return ''
        }
    }
    
    var quote1 = getRandomQuote(randomNumber(arrayLength));
    
    var stringToReturn = '<p class= "quote">' + quote1.quote + '</p>' + 
    '<p class="source">' + quote1.source +
    citationHasValue(quote1.citation) +
    yearHasValue(quote1.year) +
    '</p>';
        
    dontRepeatArray.push(quote1.quote)
    console.log(dontRepeatArray)
        
    return stringToReturn   
    }


//Testing output of printQuote function

function printRandomQuote() {
    document.getElementById('quote-box').innerHTML = printQuote();
    setRandomColor()
  }