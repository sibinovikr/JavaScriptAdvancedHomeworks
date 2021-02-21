/*## Exercise 1
There is a JSON file with students. Make a call to the file and get the following data from it: 
* All students with an average grade higher than 3
* All female student names with an average grade of 5
* All male student full names who live in Skopje and are over 18 years old
* The average grades of all female students over the age  of 24
* All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers
**Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json*/

fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
.then(response => response.json())
.then(
    response => {
        
        //All students with an average grade higher than 3
        let studentsAvrageGrade = response.filter(student => student.averageGrade > 3)
        // console.log(studentsAvrageGrade);  

        
        //All female student names with an average grade of 5
        let femaleStudentsAverage5 = response
        .filter(student => student.gender == "Female")
        .filter(student => student.averageGrade == 5);
        // console.log(femaleStudentsAverage5);
        let mappedFemaleStudents = femaleStudentsAverage5.map(student => {
            return {
                firstName: student.firstName,
                lastName: student.lastName
            };            
        });
        // console.log(mappedFemaleStudents);


        //All male student full names who live in Skopje and are over 18 years old
        let maleStudents = response
        .filter(student => student.gender == "Male")
        .filter(student => student.city == "Skopje")
        .filter(student => student.age > 18)
        // console.log(maleStudents);
        let mappedMaleStudents = maleStudents.map(student => {
            return {
                fullName: student.firstName + ' ' + student.lastName,
            };
        })
        // console.log(mappedMaleStudents);


        //The average grades of all female students over the age  of 24
        let femaleOver24 = response
        .filter(student => student.gender == "Female")
        .filter(student => student.age > 24);
        // console.log(femaleOver24);
        let averageOfFemaleOver24 = femaleOver24.map(student => {
            return {
                averageGrade: student.averageGrade
            };            
        })
        // console.log(averageOfFemaleOver24);


        //All male students with a name starting with B and average grade over 2
        let maleB = response
        .filter(student => student.gender == "Male")
        .filter(student => student.firstName.startsWith("B"))
        .filter(student => student.averageGrade > 2)        
        // console.log(maleB);

    })

.catch((error) => {
    console.error('Error:', error);
});

