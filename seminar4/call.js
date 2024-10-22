const person = {
  greet() {
    console.log(`This is my name: ${this.name}`);
  },

  meet(age, punctuation) {
    console.log(`I am ${age} old${punctuation}`);
  },
};

const person2 = {
  name: "Andrei",
};

// person.greet.call(person2);
// person.meet.call(null, 25, ".");
// person.meet.apply(person2, [25, "!"]);

const bound = person.greet.bind(person2);

const bound2 = person.meet.bind(null);

bound();
bound2(25, "?");
