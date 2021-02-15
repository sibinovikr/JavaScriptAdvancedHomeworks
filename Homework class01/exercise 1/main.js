/*## Excercise 1: Student constructor function
* Create a constructor function for Student objects with:
  * Properties:
    * firstName
    * lastName
    * birthYear
    * academy 
    * grades - array of numbers
  * Methods:
    * getAge() - returns age of student
    * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
    * getGradesAverage() - returns the average of the student grades
* Create an array with 3 students*/

function Student(first, last, birth, academy, grades) {
    this.firstName = first;
    this.lastName = last;
    this.birthYear = birth;
    this.academy = academy;
    this.studentGrades = grades;
    
    this.getAge = function(){
     
      let thisYear = new Date().getFullYear() - this.birthYear;
      return `The student is ${thisYear} years old.`;
    }

    this.getInfo = function(){
      return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}.`;
    }

    this.getGradesAverage = function () {
      return `The student has an average grade of ${(this.studentGrades[0] + this.studentGrades[1] + this.studentGrades[2] + this.studentGrades[3]) / 4 }`;
    }
    this.arrayOfThreeStudents = function () {
      return `${this.firstName} ${this.lastName}`;
    }
  };

let threeStudentsArray = [];
let student1 = new Student('Renata', 'Sibinovik', 1994, 'SEDC', [4,5,5,3]);
let student2 = new Student('John', 'Doe', 1989, 'NewAcademy', [2,5,4,4]);
let student3 = new Student('Jess', 'Smith', 1992, 'MyAcademy', [5,2,3,4]);

threeStudentsArray.push(student1.arrayOfThreeStudents());
threeStudentsArray.push(student2.arrayOfThreeStudents());
threeStudentsArray.push(student3.arrayOfThreeStudents());

console.log (student1.getAge(), student1.getInfo(), student1.getGradesAverage());
console.log (student2.getAge(), student2.getInfo(), student2.getGradesAverage());
console.log (student3.getAge(), student3.getInfo(), student3.getGradesAverage());
console.log(threeStudentsArray);

