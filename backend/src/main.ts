import * as sql from 'mysql'
import express from 'express';
import data from './data.json'
import { L2cache, PersistantCache } from './cache/cache';
import { content, content_request, post_request, settings_interface } from './interfaces/interfaces';
const settings = data as settings_interface;

const app = express()
const port = 2223

app.use(express.json())

app.get('/api', (_req: any, res: { send: (arg0: string) => any; }) => res.send("hellooo (^u^)"));

app.post('/api/post/', async (req, res) => {
    let request: post_request = req.body;

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
        let query = "INSERT INTO `posts`(`name`,`post_date`,`version`) VALUES ('" + request.name + "','" + date + "','" + request.version + "')"
        connection.query(query, (err, _result, _fields) => {
            if (err) {
                res.status(500).send("error occured while inserting (ᴗ╭╮ᴗ)")
            } else {
                res.send("successfully inserted (^~^)");
            }
        });
    }
});

app.post('/api/post/content', async (req, res) => {
    let request: content_request = req.body;

    if (request.passwd != settings.access) {
        res.status(401).send("Wrong password");
    } else {
        let connection = await sql.createConnection({
            user: settings.usr,
            password: settings.passwd,
            host: settings.host,
            database: settings.db
        });

        let data = request.data;
        let if_errored = false;
        await connection.connect();
        data.map((e: content, index) => {
            let query = "INSERT INTO `content`(`name`,`element`,`type`,`text`) VALUES ('" + e.name + "','" + index + "','" + e.type + "','" + e.text + "')";

            connection.query(query, (err, _result, _fields) => {
                if (err) {
                    if_errored = true;
                }
            });
        })

        if (if_errored || data.length === 0) {
            res.status(500).send("error occured while inserting (ᴗ╭╮ᴗ)")
        } else {
            res.send("successfully inserted (^~^)");
        }


    }
})

let ListCache = new PersistantCache();

app.get('/api/list', async (req, res) => {
    const query = "SELECT `id`, `name` FROM `posts`"
    let connection = await sql.createConnection({
        user: settings.usr,
        password: settings.passwd,
        host: settings.host,
        database: settings.db
    });

    if (ListCache.get() == null) {
        await connection.connect();
        connection.query(query, (err, result, _fields) => {
            if (err) {
                res.send(err);
            } else {
                let data = result as string;
                ListCache.set(data);
                res.send(data);
            }
        });
    } else {
        ListCache.get() ? res.send(ListCache.get()) : res.status(500).send("cache error");
        await connection.connect();
        connection.query(query, (err, result, _fields) => {
            if (err) {
                res.send(err);
            } else {
                ListCache.set(JSON.stringify(result));
            }
        })

    }
})

const PerPostCache = new L2cache(180);

app.get('/api/post_content/:name', async (req, res) => {
    let name = req.params.name;

    let connection = await sql.createConnection({
        user: settings.usr,
        password: settings.passwd,
        host: settings.host,
        database: settings.db
    });

    const query = "SELECT * FROM `content` WHERE `name` = \"" + name + "\"";

    if (PerPostCache.get(name) == undefined) {
        await connection.connect();
        connection.query(query, (err, result, _fields) => {
            if (err) {
                res.send(err);
            } else {
                let data = result as string;
                PerPostCache.set(name, data);
                res.send(data);
            }
        });
    } else {
        PerPostCache.get(name) ? res.send(PerPostCache.get(name)) : res.status(500).send("cache error");
        await connection.connect();
        connection.query(query, (err, result, _fields) => {
            if (err) {
                res.send(err);
            } else {
                PerPostCache.set(name, JSON.stringify(result));
            }
        });
    }

})

app.listen(port, () => { console.log(`Server listening on port ${port}!`) });