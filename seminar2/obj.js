const student = {
  name: "Andrei Serban",
  email: "email@gmai.com",
  yearsOld: 25,
  meet: function () {
    console.log(this.name);
  },
  meet2: () => {
    console.log(this.name);
  },
};

console.log(student.email);
console.log(student["email"]);

student.meet();

async function test1(name) {
  console.log(name);
}

const arrowtest1 = async (name) => {
  console.log(name);
};

const arrTest2 = (name) => console.log(name);

test1("adrian");
arrowtest1("matei");
