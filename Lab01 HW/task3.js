function getGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score <= 79 && score > 69) {
        return "B";
    } else if (score <= 69 && score > 59) {
        return "C";
    } else {
        return "F";
    }
}

console.log(getGrade(96));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(40));