// Grade Calculation Logic

function getGrade(marks) {
    // Handle invalid marks / non-numeric input
    if (marks === null || marks === undefined || (typeof marks === "string" && marks.trim() === "") || isNaN(Number(marks))) {
        return "Invalid marks";
    }
    const numMarks = Number(marks);
    if (numMarks < 0 || numMarks > 100) {
        return "Invalid marks";
    } else if (numMarks >= 90) {
        return "A";
    } else if (numMarks >= 80) {
        return "B";
    } else if (numMarks >= 70) {
        return "C";
    } else if (numMarks >= 60) {
        return "D";
    } else {
        // Assign grade F if marks are less than 60
        return "F";
    }
}

function checkGrade() {
    const nameInput = document.getElementById("name") || document.getElementById("studentName");
    const name = nameInput ? nameInput.value.trim() : "";
    const marks = document.getElementById("marks").value;
    const grade = getGrade(marks);
    if (name) {
        document.getElementById("result").innerHTML = `${name}'s grade is ${grade}`;
    } else {
        document.getElementById("result").innerHTML = "Your grade is " + grade;
    }
}

if (typeof module !== "undefined") {
    module.exports = { getGrade };
}