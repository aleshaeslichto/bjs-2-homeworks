// 1
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

new Student("Максим", "мужской", 21)
new Student("Инна", "женский", 22)

// 2
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// 3
Student.prototype.addMarks = function(...marks) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

// 4
Student.prototype.addMarks = function (...marks) {
  return this.marks ? this.marks.push(...marks)
}

// 5 ср. ар.
Student.prototype.getAverage = function() {
    if (this.marks === undefined) {
        return null
    } else {
        return (this.marks.reduce((previous, next) => previous + next)) / this.marks.length
    }
}

// 6
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks
  this.excluded = reason;
}
