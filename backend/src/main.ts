import * as sql from 'mysql'
import express from 'express';
import data from './data.json'
import { PersistantCache } from './cache/cache';
import { settings_interface } from './interfaces/interfaces';
const settings = data as settings_interface;

const app = express()
const port = 2223

app.use(express.json())

app.get('/backend', (_req: any, res: { send: (arg0: string) => any; }) => res.send("testing backend"));

app.post('/backend/test/post', async (req: { body: any; }, res: { status: any, send: (arg0: string) => any; }) => {
    let request = req.body;

    if (request.passwd != settings.access) {
        res.status(401).send("Wrong password");
    } else {
        let connection = await sql.createConnection({
            user: settings.usr,
            password: settings.passwd,
            host: settings.host,
            database: settings.db
        });

        await connection.connect();
        let date = new Date();
        let query = "INSERT INTO `test`(`name`,`post_date`,`version`) VALUES ('" + request.name + "','" + date + "','" + request.version + "')"
        connection.query(query, (_err, _result, _fields) => {
            res.send("successfully inserted (^~^)");
        });
    }
});

let get_cache = new PersistantCache();

app.get('/backend/test/get', async (_req: any, res: { status: any, send: (arg0: any) => void; }) => {
    let connection = await sql.createConnection({
        user: settings.usr,
        password: settings.passwd,
        host: settings.host,
        database: settings.db
    });

    if (get_cache.get() == null) {
        await connection.connect();
        connection.query("SELECT * FROM `test`", (err, result, _fields) => {
            if (err) {
                res.send(err);
            } else {
                let data = result as string;
                get_cache.set(data);
                res.send(data);
            }
        });
    } else {
        get_cache.get() ? res.send(get_cache.get()) : res.status(500).send("cache error");
        await connection.connect();
        connection.query("SELECT * FROM `test`", (err, result, _fields) => {
            if (err) {
                res.send(err);
            } else {
                get_cache.set(JSON.stringify(result));
            }
        })

    }
})

app.listen(port, () => { console.log(`Server listening on port ${port}!`) });