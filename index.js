const Todos = require('./Todos');

const todos = new Todos();

todos.add("Run code");

todos.add("test everything");
todos.complete("Run code");

console.log(todos.list());