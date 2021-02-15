/*##Ex 1: Title Generator
* Create 3 inputs:
  * Color
  * FontSize
  * Text
* Create a button for generating titles
* When the button is clicked generate a new h1 element with the color, font size and text from the inputs*/

$(document).ready(function () {

    let genrateBtn = $("#generateButton");
    let inputText = $("#text");
    let textSize = $("#fontSize");
    let inputColor = $("#color");
    let h3ForMessages = $("#h3ForMessages");

    genrateBtn.click(function (e) {

        if ((!inputText.val()) && (!inputColor.val()) && (!textSize.val())) {

            h3ForMessages.text('Please enter text, color and font size!')

        } else if (!inputText.val()) {

            h3ForMessages.text('Please enter text!')
        } else if (!textSize.val()) {

            h3ForMessages.text('Please enter font size!')

        } else if (!inputColor.val()) {

            h3ForMessages.text('Please enter some color!')
        } else {
            genrateBtn.after(`<h2>${inputText.val()}</h2>`)
            let h2 = $("h2")
            console.log(h2.text());
            h2.css("color", `${inputColor.val()}`);
            h2.css("fontSize", `${textSize.val()}px`);
            console.log(textSize.val());
            e.preventDefault();
        }
    })
    $("#formReset").reset();

});