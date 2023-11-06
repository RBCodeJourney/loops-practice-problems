


function calculateGrade(score) {
  let grade;

  if (score >= 80) {
    grade = "A";
  } else if (score >= 60) {
    grade = "B";
  } else if (score >= 50) {
    grade = "C";
  } else if (score >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }

  return grade;
}

const yourScore = 85;
const tomScore = 66;
const janesScore = 95;
const peterScore = 56;
const johnScore = 40;

const yourGrade = calculateGrade(yourScore);
const tomGrade = calculateGrade(tomScore);
const janesGrade = calculateGrade(janesScore);
const peterGrade = calculateGrade(peterScore);
const johnGrade = calculateGrade(johnScore);

console.log("Your grade is:", yourGrade);
console.log("Tom's grade is:", tomGrade);
console.log("Jane's grade is:", janesGrade);
console.log("Peter's grade is:", peterGrade);
console.log("John's grade is:", johnGrade);




