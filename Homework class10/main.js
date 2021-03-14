/* ##1.Create 3 object templates. Academy, Student and Subject. The structure should be:

Academy

* Name - string
* Students - array of Students
* Subjects - array of Subjects
* Start - Date when it starts
* End - Date when it ends
* NumberOfClasses - number of subjects * 10, not settable
* PrintStudents - method that prints all students in console
* PrintSubjects - method that prints all subjects in console

Subject

* Title - string
* NumberOfClasses - default 10, not settable
* isElective - boolean
* Academy - Academy object
* Students - array of Students
* OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

Student

* FirstName - string
* LastName - string
* Age - number

* CompletedSubjects - emptyArray as default, not settable
* Academy - null as default, not settable 
* CurrentSubject - null as default, not settable
* StartAcademy - accepts Academy object that it sets to the Academy property of the student
* StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an
 Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property*/


function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = function () {
        console.log(this.subjects.length * 10);
    }

    this.printStudents = function () {
        console.log(this.students);
    };

    this.printSubjects = function () {
        console.log(this.subjects);
    };

};

let myAcademy = new Academy(
    "SEDC",
    ["John", "Nick", "Mike"],
    ["History", "Geography", "Math"],
    new Date(15 / 01 / 2021), new Date(15 / 03 / 2021)
);


function Subject(title, isElective, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = myAcademy;
    this.students = students;

    this.overrideClasses = function (number) {
        this.NumberOfClasses === number >= 3? number:"The number can't be smaller than 3";
    };
};

let mySubject = new Subject("History", true, ["Eva", "Marrie", "Emily"]);


function Student(firstName, lastName, age, completedSubjects) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function () {
        this.academy = myAcademy;
    }

    this.startSubject = function (newSubject) {
        if (this.academy) {
            let theSubject = this.academy.subjects.filter(sub => sub === newSubject.title).length>0;
            if (theSubject) {
                newSubject.students.push(this.firstName);
                if (!this.currentSubject) {
                    this.currentSubject = newSubject;
                    return;
                }

                this.completedSubjects.push(this.currentSubject);
                this.currentSubject = newSubject;
            }
        } else {
            throw new Error("Subject not found");
        }
    };
};

let renata = new Student(
    "Renata",
    "Sibinovikj",
    26,
    [new Subject("History", false, ["Joe", "Victoria"]), new Subject("Programming", true, ["Luke", "Michael"])]
);
renata.startAcademy(myAcademy);

let geography = new Subject("Geography", true, ["Tonny", "Jack", "Harry"]);
renata.startSubject(geography);

let math = new Subject("Math", true, ["Lori", "Olivia", "Emma"]);
renata.startSubject(math);

console.log(renata);



 



