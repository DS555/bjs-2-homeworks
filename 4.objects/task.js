function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  };
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marksToAdd) {
    if (this.hasOwnProperty("marks") === true) {
    this.marks = (this.marks.map(i => i), marksToAdd);
    }
  }
  
  Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    if (this.hasOwnProperty("excluded") === true) {
    delete this.marks;
    delete this.subject;
    }
  }
  
  Student.prototype.getAverage = function () {
    this.average = (this.marks.reduce((acc, item, index, arr) => {acc += item;
    if (index === arr.length - 1) {
     return acc / arr.length;
    }
    return acc;}, 0))                
  }
  
  let student1 = new Student("Василиса", "женский", 19);
  student1.setSubject("Algebra");
  console.log(student1.getAverage());
  student1.addMarks(4, 5, 4, 5);
  console.log(student1.getAverage());
  console.log(student1);
  let student2 = new Student("Артём", "мужской", 25);
  student2.setSubject("Geometry");
  student2.exclude('плохая учёба');
  console.log(student2);