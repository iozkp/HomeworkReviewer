const students = [
  "Samira",
  "Sepideh",
  "Evelina",
  "Maglin",
  "Anastasia",
  "Sulakshana",
  "Janaki",
  "Irmak",
  "Christy",
  "Chanakarn",
  "Narges",
  "Yana",
  "Seda",
  "Vanitha",
  "Afrin",
  "Lucia",
  "Hajra",
];

const teachers = ["Mack", "Kumaran", "Lukáš", "Tim"];


//randomly assign students to teachers
function assignStudentsToTeachers(students, teachers) {
  const assignments = {};
  teachers.forEach((teacher) => {
    assignments[teacher] = [];
  });

  students.forEach((student) => {
    const randomTeacher = teachers[Math.floor(Math.random() * teachers.length)];
    assignments[randomTeacher].push(student);
  });       

  return assignments;
}
const assignments = assignStudentsToTeachers(students, teachers);
console.log(assignments);


//sort students alphabetically
const sortedStudents = [...students].sort();
console.log(sortedStudents);
//sort teachers by length of name
const sortedTeachers = [...teachers].sort((a, b) => a.length - b.length);
console.log(sortedTeachers);
//shuffle students randomly 
const shuffledStudents = [...students].sort(() => Math.random() - 0.5);

console.log(shuffledStudents);

//shuffle teachers randomly
const shuffledTeachers = [...teachers].sort(() => Math.random() - 0.5);
console.log(shuffledTeachers);


//expected output:
//
// [
//   {student: "s1", teacher : "t2"},
//   {student: "s2", teacher : "t2"},
//   {student: "s3", teacher : "t1"},
// ] should be like this

let result = [];
for (let teacher in assignments) {
  assignments[teacher].forEach(student => {
    result.push({ student: student, teacher: teacher });
  });
}     

console.log(result);
  