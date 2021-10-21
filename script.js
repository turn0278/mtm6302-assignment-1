
//Code
const $library = document.getElementById('container')

    // Setting a place to start in the emoji database with 100 emotjis in a row no blanks. In order to run a loop printing them out.
const $emoji = [127744]                             


//Functions

    // x will run 100 times
for (let x = 0; x < 100; x++) {

    // Adding HTML dynamically
 $library.innerHTML += 
    
    // The iterator will be added by x adn then the emoji printed followed by the number beside the emoji
 `
 <p>&#${$emoji[0] + x};
 <code>${$emoji[0] + x}</code></p>
 `   

    // It took far too long to debug this code for a simple "[]"
}