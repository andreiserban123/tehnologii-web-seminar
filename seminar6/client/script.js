const getUsers = async () => {
  const response = await fetch("http://127.0.0.1:3000/users");
  const users = await response.json();
  console.log(users);
};

getUsers();
