/*# Exercises
## Exercise 1
Create a button
When the button is clicked, get the data from a given url with an AJAX call. \
Print the name of the academy in an **h1** tag. \
Print all student names in an **unordered list**. \
**URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
**NOTE:** You need to parse this data before using it.*/

$(document).ready(function() {

    function students(theStudents) {
        let newHeader1 = $(`<h1></h1>`).text(`${theStudents.academy}`);
        let studentNames = $(`<ul></ul>`);
        $("#myDiv").append(newHeader1,studentNames);

        for (i = 0; i < theStudents.students.length; i++) {
            studentNames.append(`<li> ${theStudents.students[i]}</li>`);
        }
    }

    $("#btn").click(function () {
        $.ajax ( {
            method:"GET",
            url:"https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",

            success: function(response) {
                let studentsResoponse = JSON.parse(response);
                students(studentsResoponse);
            },
            error:function(response) {
                console.log("Bad request");
            } 
        });
    });
});