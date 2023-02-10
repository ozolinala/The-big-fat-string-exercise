"use strict";
// const output = document.querySelector("process");

let input;
let option;
let output;

init();

function init(){
document.querySelector("#process").addEventListener("click", buttonClicked);
}

function buttonClicked(){
    console.log("button clicked");
readInput();
readOption();
process();
showOutput();

}

function readOption(){
    option = document.querySelector("#string-option").value;
    console.log(option);
}

function readInput () {
input = document.querySelector("#input").value;
}

function process() {
    // input = document.querySelector("#input").value;
    // option = Number(document.querySelector("#string-option").value);

// If input is a first name: Make the first character in a name uppercase, and the rest lowercase
if (option == 1){
    output = input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
    console.log(output);
}
// If input is a full name: Find the first name
if (option == 2){
    output = input.substring(0, input.indexOf(" "));
    console.log(output);
}
// If input is a full name: Find the length of the first name
if (option == 3){
output = `The first names length is: ${input.substring(0, input.indexOf(" ")).length}`;
console.log(output)
}
// If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
if (option == 4){
    output = `The middle name is: "${input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "))}". It starts at index ${input.indexOf(" ") + 1} and ends at index ${input.lastIndexOf(" ") - 1}.`;
console.log(output);
}
// If input is a filename: Check if a filename is .png or .jpg
if (option == 5){
    if (input.endsWith (".png") == true){
        output ="It is a png image.";
    } else if (input.endsWith(".jpg") == true) {
        output ="It is a jpg image.";
    } else {
        output = "It is not an image.";
    }
    console.log(output);
}
// If input is a password: Hide a password with the correct number of *s
if (option == 6){
    output = "*".repeat(input.lenght);
    console.log(output);
}
// With any input: Make the third character uppercase
if (option == 7){
output = `${input.substring(0, 2).toLowerCase()}${input.substring(2, 3).toUpperCase()}${input.substring(3).toLowerCase()}`;
console.log(output);
}
// With any input: Make a character uppercase, if it follows a space or a hyphen
// if (option == 8){
// }
// couldn't figure out the 8th
}


function showOutput() {
    document.querySelector("#output").value = output;
    console.log(output);
    init()
}