
//Code
const $library = document.getElementById('container')

const $emoji = [127744]                             


//Functions
for (let x = 0; x < 100; x++) {
 $library.innerHTML += 
 `
 <p>&#${$emoji[0] + x};
 <code>${$emoji[0] + x}</code></p>
 `   

}