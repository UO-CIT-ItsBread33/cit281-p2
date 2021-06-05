/*
    CIT 281 Project 2
    Name: Brad Walther
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

// Returns a string of random alphabetical characters with a length between minLength and maxLength
const getRandomString = function(minLength, maxLength) {
    let resultTwo = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        resultTwo += getRandomLetter();
    }
    return resultTwo

}
// Turns a string into an array which is then sorted alphabetically, then turns the array back to a string
const getSortedString = function(string) { 
    return string.split("").sort().join("");  
}
// Returns a random letter from the array alphabet by calling getRandomInteger to determine the letter 
const getRandomLetter = function() {
    return alphabet[getRandomInteger(1,alphabet.length-1)]; 
}

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

/*console.log(result);
*/
console.log(getRandomString(10,20));
console.log(getSortedString("xpacd"));
