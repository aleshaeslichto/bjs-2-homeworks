function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...marks) {
    return this.marks ? this.marks.push(...marks) : "student is excluded"
}

Student.prototype.getAverage = function() {
    return this.marks && this.marks.length ?
        this.marks.reduce((previous, next) => previous + next, 0) / this.marks.length : 0;
}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}