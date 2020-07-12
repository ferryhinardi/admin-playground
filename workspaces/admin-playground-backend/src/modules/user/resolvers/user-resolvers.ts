const userData = [{ name: "user1" }, { name: "user2" }];

export default {
  Query: {
    users() {
      return userData;
    },
    user(parent, args) {
      return userData.filter((user) => user.name === args.name);
    },
  },
};
