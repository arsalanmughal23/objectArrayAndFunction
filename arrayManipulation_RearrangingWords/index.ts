const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

// given below code delete 4 Element from 2 index of scrambledArray variable by using splice method
// Splice returns deleted elements
// Then i carry out the slice of last 2 elements from the result of splice method
// And store result in scrapeWords variable
let scrapeWords = scrambledArray.splice(2,4).slice(-2);
// console.log(scrapeWords)

// Now, I am pop-out the last element from scrambledArray variable
// And add poped-out element with scrapeWords elements on starting index of scrambledArray variable
scrambledArray.unshift(scrambledArray.pop() ?? '', ...scrapeWords);
// console.log(scrambledArray)

console.log(scrambledArray.join(' '));
