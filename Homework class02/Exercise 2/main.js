/*## List Generator
* Create 3 inputs:
  * Color
  * FontSize
  * Items
* Create a button for generating unordered lists
* When the button is clicked generate a new ul element with the color, font size and items from the inputs 
> Items should be added separated by , in the input
*/

$(document).ready(function (e) {

$("#generateButton").click(function () {
    event.preventDefault();
    let inputColor = $("#color").val();
    let textSize = $("#fontSize");
    let itemsInput = $("#text").val();
    let newText = (itemsInput.length > 0)

  if ((newText === true)) {
    $("#myForm").append(`<ul id="myUl"></ul>`);
    let myItems = itemsInput.split(",");

    for (let i = 0; i < myItems.length; i++) {
      $("#myUl").append(`<li> ${myItems[i]} </li>`);
      let myListItems = $("li");
      myListItems.css("color", inputColor);
      myListItems.css("fontSize", `${textSize.val()}px`);
    }

  }
})
    
});