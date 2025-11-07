
import database from 'mysql2';

const db = database.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sep_01_2025"
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