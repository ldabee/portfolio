const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');


// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, './database.db')

async function openDb() {
  return sqlite.open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}

async function setup() {
  try {
    const db = await openDb();
    await db.migrate(
      {
        migrationsPath: './migrations', //add cutom path to your migrations
        force: 'last'
      }
    );
    const users = await db.all('SELECT * FROM user');
    console.log('All users', users);
  } catch (e) {
    console.log(e)
  }
};

setup();