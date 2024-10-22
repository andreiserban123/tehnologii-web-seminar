class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Teacher extends Student {
  constructor(name, age, grade, subject) {
    super(name, age);
    this.grade = grade;
    this.subject = subject;
  }

  teach() {
    console.log(`I'm teaching ${this.subject}`);
  }
}

const student = new Student("John", 20, 3);
student.sayHello();
const teacher = new Teacher("Jane", 30, 5, "Math");
teacher.sayHello();
teacher.teach();
