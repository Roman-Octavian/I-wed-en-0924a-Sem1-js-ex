import { nanoid } from 'nanoid';

// Define a Student object with properties: name, id, and grades (an array of numbers).
class Student {
  public name: string;
  private id: string = nanoid();
  public grades: number[];

  constructor(name: string, grades: number[]) {
    this.name = name;
    this.grades = grades;
  }
}

// Write a function named addGrade that takes a Student object and a grade (number) as parameters,
// and adds the grade to the student's grades array.
function addGrade(student: Student, grade: number): void {
  student.grades.push(grade);
}

// Write a function named updateStudentName that takes a Student object and a new name as parameters
// and updates the student's name.
function updateStudentName(student: Student, name: string): void {
  student.name = name;
}

// Create a student object.
const student = new Student('Student Studentson', []);

// Add a few grades to the student.
for (let i = 0; i <= 10; i++) {
  addGrade(student, i);
}

// Update the student's name and print the updated object.
updateStudentName(student, 'Bob Bobinson');
console.log(student);
