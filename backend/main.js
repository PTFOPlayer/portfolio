import sql from 'mysql'
import express from 'express';

const app = express()
const port = 2223


import data from './data.json' assert { type: 'json' };

app.use(express.json())

app.get('/backend', (req, res) => {
    res.send("testing backend")
});

app.post('/backend/test/post', async (req, res) => {
    let request = req.body;

    if (request.passwd != data.access) {
        res.status(401).send("Wrong password");
    } else {
        let connection = await sql.createConnection({
            user: data.usr,
            password: data.passwd,
            host: data.host,
            database: data.db
        })

        await connection.connect();
        let date = new Date();
        let query = "INSERT INTO `test`(`name`,`post_date`,`version`) VALUES ('" + request.name + "','" + date + "','" + request.version + "')"
        connection.query(query, (err, result, fields) => {
            res.send("successfully inserted (^~^)");
        })
    }
});

class cache {
    data;

    constructor() {
        this.data = null;
    }

    set(data) {
        this.data = data;
    }

    get() {
        return this.data;
    }
}

let get_cache = new cache();

app.get('/backend/test/get', async (req, res) => {
    let connection = await sql.createConnection({
        user: data.usr,
        password: data.passwd,
        host: data.host,
        database: data.db
    });

    if (get_cache.get() == null) {
        await connection.connect();
        connection.query("SELECT * FROM `test`", (err, result, fields) => {
            if (err) {
                res.send(err);
            } else {

                let data = JSON.stringify(result);
                get_cache.set(data);
                res.send(data);
            }
        })
    } else {
        res.send(get_cache.get());
        await connection.connect();
        connection.query("SELECT * FROM `test`", (err, result, fields) => {
            if (!err) {
                get_cache.set(JSON.stringify(result));
            }
        })

    }
})

app.listen(port, () => { console.log(`Server listening on port ${port}!`) });