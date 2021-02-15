/*## Student signup
* Create a form with first name, last name, birth year and academy
* Create a button for signing up
* The button should create a new Student object and add it in the array of students*/

function studentSignUp (first, last, birth, academy) {
    this.firstName = first;
    this.lastName = last;
    this.birthYear = birth;
    this.myAcademy = academy;    
  };

  let studentArray = [];
  let firstN = document.getElementById("firstName");
  let lastN = document.getElementById("lastName");
  let birthY = document.getElementById("birthYear");
  let theAcademy = document.getElementById("myAcademy");
  let signUpButton = document.getElementById("signUpBtn");

  function myForm(){
    firstN.value = "";
    lastN.value = "";
    birthY.value = "";
    theAcademy.value = "";
  }
  
  signUpButton.addEventListener("click", function(){
    event.preventDefault();
    let firstName = firstN.value;
    let lastName = lastN.value;
    let birthYear = birthY.value;
    let myAcademy = theAcademy.value;

    if (!firstName || !lastName || !birthYear || !myAcademy){
      console.log("Please fill the whole form.")
    }else{
      let studentObj = new studentSignUp(firstName, lastName, birthYear, myAcademy);
      studentArray.push(studentObj);
      console.log(studentObj);      
    }
    myForm();
  })

