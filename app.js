const { argv } = require('./config/yargs');
const list = require('./lists/lists');

let comando = argv._[0];

switch (comando) {
    case 'list':
        let tasks = list.get();
        for (const task of tasks) {
            console.log(`----------------------------------------`);
            console.log(`Description: ${task.description}`);
            console.log(`Completed: ${task.completed}`);
        }
        console.log(`----------------------------------------`);
        break;
    case 'create':
        list.create(argv.description, argv.completed);
        break;
    case 'update':
        console.log(list.update(argv.description, argv.completed));
        break;
    case 'remove':
        console.log(list.remove(argv.description));
        break;

    default:
        console.log("Command not found");
        return;
        break;
}