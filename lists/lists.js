const fs = require('fs');

let list;

try {
    list = require('./db/data.json');
} catch (error) {
    // console.log(error);
    list = [];
}

const save = () => {
    let data = JSON.stringify(list);

    fs.writeFile('./lists/db/data.json', data, (err) => { if (err) console.log("Error writing data"); });
}

const create = (description, completed) => {
    let task = {
        description,
        completed
    }

    list.push(task);
    save();
}

const get = () => list;

const update = (description, completed = true) => {

    let index = list.findIndex(task => {
        return task.description === description;
    });

    if (index >= 0) {
        list[index].completed = completed;
        save();
        return true;
    }
    return false;
}

const remove = (description) => {

    let filtered_list = list.filter(task => {
        return task.description !== description;
    });

    if (filtered_list.length === list.length) {
        return false;
    } else {
        list = filtered_list;
        save();
        return true;
    }
}

module.exports = {
    create,
    get,
    update,
    remove
}