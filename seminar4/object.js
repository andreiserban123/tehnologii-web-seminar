const person = {
  name: "Andrei",
  greet() {
    console.log(`This is my name: ${this.name}`);
  },
};

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(`${this.email} has logged in`);
};

User.prototype.logout = function () {
  this.online = false;
  console.log(`${this.email} has logged out`);
};

const user = new User("andyspeed2003@gmail.com", "Andrei");
user.login();
console.log(user);
