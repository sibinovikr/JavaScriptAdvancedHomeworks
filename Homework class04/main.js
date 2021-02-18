/*Create 2 variables with arrow functions.
1. First arrow function will accept two parameters, one for element and one for color. 
The function should change the given element text color with the color given from the second color parameter. 
If no parameter is passed for color, the default value is **black**.*/

let colorFunction = (element, color) => {
    if (color !== ""){
        element.style.color = `${color}`;
    }else {
        element.style.color = "black";
    }
};

/*2. Second arrow function will accept two parameters, one for element and one for textSize. 
The function should change the given element text size to the number given from the second textSize parameter. 
If no parameter is passed for textSize, the default value is 24.*/

let textSizeFUnction = (element, textSize) => {
    if (textSize !== "") {
        element.style.fontSize = `${textSize}px`;
    }else {
        element.style.fontSize = "24px";
    }
};

/*Create an HTML document with two inputs, a button and an h1 header with some text. 
The first input should be for text size and the second for color.
 When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ).
 Use the functions that we declared earlier and use arrow function for the event listener of the button. */
 
 let myColor = document.getElementById("color");
 let myTextSize = document.getElementById("textSize");
 let changeButton = document.getElementById("myBtn");
 let myH1Text = document.getElementById("changeText");

 changeButton.addEventListener("click", () => {
     colorFunction(myH1Text, myColor.value);
     textSizeFUnction(myH1Text, myTextSize.value);
 });
