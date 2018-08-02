const description = { alias: 'd', demand: true, desc: "Task description" };
const completed = { alias: 'c', default: true, desc: "Task status" };

const { argv } = require('yargs')
    .command('list', 'List the tasks')
    .command('create', 'Add new task', {
        description,
        completed
    })
    .command('remove', 'Remove a task', {
        description
    })
    .command('update', 'Update a task', {
        description,
        completed
    })
    .help();

module.exports = { argv }