import fs from "fs";
import uniqid from "uniqid";
import chalk from "chalk";
​
const addUser = function (name, email) {
  const users = loadUsers();
  const duplicatedUser = users.filter(function (user) {
    return user.name === name;
  });
​
  if (duplicatedUser.length === 0) {
    users.push({
      id: uniqid(),
      name,
      email,
    });
    saveUsers(users);
    console.log(chalk.green("New User Added"));
  } else {
    console.log(chalk.red("User name taken!"));
  }
};
​
const readUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === id);
​
  if (user) {
    console.log(chalk.green(user.name));
  } else {
    console.log(chalk.red("User not found"));
  }
};
​
const updateUser = (id, newName) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === id);
​
  user.name = newName;
  console.log(chalk.green(`User ${id} has been updated`));
  saveUsers(users);
};
​
const removeUser = (id) => {
  const users = loadUsers();
  const keptUsers = users.filter(function (user) {
    return user.id !== id;
  });
​
  if (users.length > keptUsers.length) {
    saveUsers(keptUsers);
    console.log(chalk.green("User Removed"));
  } else {
    console.log(chalk.red("User was not found"));
  }
};
​
const loadUsers = function () {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
​
const saveUsers = function (users) {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};
​
export { addUser, readUser, updateUser, removeUser };