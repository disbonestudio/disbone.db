const disbonedb = require(".");

//const WickDB = require('wick.db');
const db = new disbonedb('./disbone.json');

async function demo() {
    // Setting a value
    await db.set('hello', 'world');
    console.log('Value set!');

    // Getting a value
    const value = await db.get('hello');
    console.log('Got value:', value);

    // Deleting a value
    await db.delete('hello');
    console.log('Value deleted');

    // Getting all entries
    const allEntries = await db.all();
    console.log(allEntries);

    // Clearing the database
    await db.clear();
    console.log('Database cleared');
}

demo();