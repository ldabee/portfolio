const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
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