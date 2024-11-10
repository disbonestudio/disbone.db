# disbone.db

A simple, lightweight, and versatile JSON-based database for Node.js, proudly brought to you by Wick Studio. Wick.db is designed for small to medium-scale projects requiring a straightforward, file-based database solution with an emphasis on ease of use and minimal setup.

## Features

- **Lightweight & Fast** : Quick to set up and requires minimal dependencies.
- **Easy to Use** : Intuitive API for CRUD operations.
- **Flexible** : Works well for a wide range of JavaScript and Node.js projects.
- **No External Database Management** : No need to manage a separate database server.
- **Open Source** : Feel free to contribute, fork, or suggest improvements!

## Installation

Install wick.db using npm :

```bash
npm install disbone.db
```

Or using yarn :

```bash
yarn add disbone.db
```

## Quick Start

```js


const disbonedb = require('disbone.db');
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
```

## API Reference

- **set(key, value)** : Sets a value for a given key.
- **get(key)** : Retrieves a value by key.
- **delete(key)** : Deletes a key-value pair by key.
- **all()** : Returns all entries in the database.
- **clear()** : Clears the database.
- **update(key, value)** : Updates the value for a given key.

## Contributing

We welcome contributions to wick.db! Whether it's submitting bugs, requesting features, or submitting your own code changes, all through GitHub :

- Repo:[github](https://github.com/disbonestudio/disbone.db)
- Issues:[github](https://github.com/disbonestudio/disbone.db/issues)

## Join Our Community

Have questions, suggestions, or want to discuss wick.db and other projects? Join us on Discord : [discord.gg/disbone](https://discord.gg/b5spPy7U8w)

## License

wick.db is MIT licensed. See the [LICENSE](github.com/disbonestudio/disbone.db/blob/main/LICENSE) file for more details.
