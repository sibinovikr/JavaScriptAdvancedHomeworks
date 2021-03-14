/*#Exercises
## Exercise 1
Create a Person constructor function that has:
* firstName
* lastName
* age
* getFullName - method

Create a Student constructor function that inherits from Person and has:
* academyName
* studentId
* study - method that writes in the console: The student firstName is studying in the academyName

Create two Student objects

## Exercise 2
Create a method on the Student prototype that accepts a Student of any academy and returns the academy that that student is in.

Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.
#### DesignStudent
* isStudentOfTheMonth - boolean
* attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

#### CodeStudent
* hasIndividualProject - boolean
* hasGroupProject - boolean
* doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

#### NetworkStudent
* academyPart - number
* attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

**Note:** For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

Create one of each students
Check all students with the Student method for checking students academy*/


//Person constructor
function Person(firstName, lastName, age){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
    this.getFullName = function(){
        console.log(`${this.lastName}, ${this.firstName}`);
    }
}

function Student(firstName, lastName, age, academyName, studentId){
    Object.setPrototypeOf(this,new Person(firstName, lastName, age));
    this.academyName = academyName;
	this.studentId = studentId;
    this.study = function(){
        console.log(`The student ${this.firstName} is studying in ${this.academyName}`);
    }
}

function designStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this,new Student(firstName, lastName, age, academyName, studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
	this.academyName = 'Design';
    this.attendAdobeExam = function(){
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}

function codeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject){
    Object.setPrototypeOf(this,new Student(firstName, lastName, age, academyName, studentId));
    this.hasIndividualProject = hasIndividualProject;
	this.hasGroupProject = hasGroupProject;
	this.academyName = 'Code';
    this.doProject = function(type){
		if(type == "individual")
		{
			this.hasIndividualProject = true;
			this.hasGroupProject = false;
			console.log(`The student ${this.firstName} is working on an individual project!`);
		}
		else if(type == "group")
		{
			this.hasGroupProject = true;
			this.hasIndividualProject = false;
			console.log(`The student ${this.firstName} is working on a group project!`);
		}
        else
		{
			console.log(`Unknown type entered!`);
		}
    }
}

function networkStudent(firstName, lastName, age, academyName, studentId, academyPart){
    Object.setPrototypeOf(this,new Student(firstName, lastName, age, academyName, studentId));
    this.academyPart = academyPart;
	this.academyName = 'Network';
    this.attendCiscoExam = function(){
        console.log(`The student ${this.firstName} is doing a Cisco exam!`);
    }
}

let studentObject1 = new Student("Renata","Sibinovikj",26,"SEDC",50);
let studentObject2 = new Student("John","Doe",80,"IAcademy",65);

studentObject1.study();

function getAcademyForStudent(obj){
	obj.study();

	// alternative solution
	//console.log(`The student ${obj.firstName} is studying in ${obj.academyName}`);
}

getAcademyForStudent(studentObject2);

let designStudentObject = new designStudent("Mike","Adams",18,"IAcademy 1",52, true);
let networkStudentObject = new networkStudent("Eva","Williams",22,"IAcademy 2",53, 3);
let codeStudentObject = new codeStudent("Zoe","Miller",23,"IAcademy 3",61, true, false);

getAcademyForStudent(designStudentObject);
getAcademyForStudent(networkStudentObject);
getAcademyForStudent(codeStudentObject);

