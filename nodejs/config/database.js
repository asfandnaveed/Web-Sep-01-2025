
import database from 'mysql2';

const db = database.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
});

db.connect((err) => {

    if (err) {
        console.log('Connection Refused ! ' + err);
    } else {
        console.log('Connection Success !');
    }
});


export default db;
// module.exports = db;