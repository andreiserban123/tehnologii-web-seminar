const users = require("./user");

const usersMethods = (() => {
  const dbUsers = [...users];

  return {
    findMany: async (filter) => {
      const { age, name } = filter;
      if (age) {
        return dbUsers.filter((user) => user.age === parseInt(age));
      }
    },
    findOne: async (id) => {
      const userId = parseInt(id);
      if (isNaN(userId)) {
        return { error: "Invalid ID" };
      }
      const user = dbUsers.find((user) => user.id === userId);
      if (user) {
        return user;
      } else {
        return { error: "User not found" };
      }
    },
  };
})();
