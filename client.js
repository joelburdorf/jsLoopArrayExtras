let allTheWords = [ 'calculating', 'guitar', 'various', 'thirsty', 'history', 'friend', 'discreet', 'godly', 'grip', 'wait', 'humor', 'agonizing', 'jazzy', 'sail', 'love', 'crow', 'giants', 'ball', 'curl', 'vivacious', 'excuse', 'extend', 'black', 'rabid', 'shirt', 'prefer', 'cup', 'mundane', 'nimble', 'unbiased', 'meal', 'overflow', 'rhetorical', 'clam', 'dusty', 'dirty', 'understood', 'royal', 'cloistered', 'dry', 'redundant', 'letter', 'wool', 'scattered', 'ear', 'offer', 'auspicious', 'funny', 'nostalgic', 'crash', 'crib', 'error', 'five', 'step', 'powder', 'minute', 'exotic', 'pedal', 'mountain', 'appliance', 'girls', 'pour', 'closed', 'unbecoming', 'button', 'glistening', 'press', 'previous', 'shy', 'fool', 'peck', 'warlike', 'end', 'sugar', 'jittery', 'wealth', 'applaud', 'flight', 'tiny', 'drop', 'bubble', 'cluttered', 'famous', 'sisters', 'fly', 'lick', 'brake', 'lazy', 'debt', 'breathe', 'makeshift', 'day', 'book', 'curve', 'mend', 'fortunate', 'breezy', 'tremble', 'hall', 'house' ];

// console.log how many words are in the array
console.log(allTheWords.length);

// console.log "true" if allTheWords contains the word "error", "false" if it does not


for (let i=0; i<allTheWords.length; i++){
  if ( allTheWords[i] === 'error'){
    console.log(true);
} else {
  console.log(false);
}
}

for (errorWord of allTheWords){
 if (errorWord === 'error'){
    console.log(true)
  } else {
    console.log(false)
 }
}

// console.log an array of all words that are longer than 7 characters
const sevenPlus = allTheWords.filter(word => {    //.filter returns an array of elements after filtering out certain elements. This uses a callback function
  return word.length > 7;                         // for the .filter and should return a true/false depending on the element passed to it. Elements that
});                                               //return a true are added to the new array. I learned this codecademy last month and used my notes to solve.
console.log(sevenPlus);

// console.log an array of all words that do not contain the letter "e"

const matchWithOutE = allTheWords.filter(s => !s.includes('e'));            //figuring out exactly how to use the '!' took me a little while

console.log(matchWithOutE);


// console.log an array of all words that either start with the letter "s" or end with "ing"

const startsOrEnds = allTheWords.filter(s => s.startsWith('s') || s.endsWith('ing'));
console.log(startsOrEnds);

// console.log the average word length in the array

function itemLength(allTheWords){             //I found this solution on-line and taylored it for use in this lesson
  let currentWord = '';                       //I did not create it from scratch
  let currentWordLength = 0;
  let sum = 0;
  let avg = 0;
  if(allTheWords.length > 0){
    for(let i = 0; i < allTheWords.length; i++){
      currentWord = allTheWords[i];
      currentWordLength = currentWord.length;
      sum += currentWordLength;
      avg = sum/allTheWords.length;
    }
  return avg;
  }
}

console.log(itemLength(allTheWords));

// console.log an array of all words shorter than the average word length

const shortWords = allTheWords.filter(word => {
  return word.length < 5.87;
});

console.log(shortWords);
