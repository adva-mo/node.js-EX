import yargs from "yargs";
import { addUser, readUser, updateUser, removeUser } from "./utils.js";
​
const y = yargs();
​
y.command({
  command: "add",
  describe: "Add a new user",
  builder: {
    id: {
      describe: "User ID",
      demandOption: false,
      type: "string",
    },
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User email",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addUser(argv.name, argv.email);
  },
});
​
y.command({
  command: "read",
  describe: "Read user",
  builder: {
    id: {
      describe: "User ID",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    readUser(argv.id);
  },
});
​
y.command({
  command: "update",
  describe: "Update a user",
  builder: {
    id: {
      describe: "User ID",
      demandOption: false,
      type: "string",
    },
    newName: {
      describe: "Update user name",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    updateUser(argv.id, argv.newName);
  },
});
​
y.command({
  command: "remove",
  describe: "Remove a user",
  builder: {
    id: {
      describe: "User ID",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    removeUser(argv.id);
  },
});
​
y.parse(process.argv.slice(2));