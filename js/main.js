console.log('JavaScript is running!');

/*  longer JS block comment
const is a type of variable - a bot of memory that can hold a value

JS uses (can use)ANY valid CSS selector to make a connection to ANY element on the page - it works the same way as CSS selectors do, because it`s USING css selectors to find matching element(s).

the document is the DOM - the web page and all of its element

querySelector is the method (function) that makes the connection between JS and the DOM (the elements) */

// step 1 - make the conection to the element(s) you want to interact with

const jpgGraphic = document.querySelector("#bitmap");
const vectorGraphic = document.querySelector("#vector");

function logID() {
    console.log('clicked on this element:', this.id);
}


// step 2 - decide how you want the user to interact with the object you created in step 1
jpgGraphic.addEventListener('click', logID);

vectorGraphic.addEventListener('click', logID);