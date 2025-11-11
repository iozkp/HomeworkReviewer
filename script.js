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

// Fair round-robin assignment
function assignRoundRobin(students, teachers) {
  const shuffledStudents = [...students].sort(() => Math.random() - 0.5);
  const shuffledTeachers = [...teachers].sort(() => Math.random() - 0.5);

  const assignments = {};
  shuffledTeachers.forEach((teacher) => (assignments[teacher] = []));

  shuffledStudents.forEach((student, i) => {
    const teacher = shuffledTeachers[i % shuffledTeachers.length];
    assignments[teacher].push(student);
  });

  return assignments;
}

// Create the result
const result = assignRoundRobin(students, teachers);

// Convert to [{student, teacher}, ...] format using modern methods
const pairs = Object.entries(result).flatMap(([teacher, students]) =>
  students.map((student) => ({ student, teacher }))
);

console.log(pairs);
