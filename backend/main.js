import sql from 'mysql'
import express from 'express';

const app = express()
const port = 2223

import data from './data.json' assert {type: 'json'};

app.get('/backend', (req, res) => {
    res.send("testing backend")
});

app.get('/backend/sqltest', async (req, res) => {
    let connection = await sql.createConnection({
        user: data.usr,
        password: data.passwd,
        host: data.host,
        database: data.db
    })
    await connection.connect();
    let v1 = 'n1';
    let v2 = '1.0';
    let date = new Date();
    connection.query("INSERT INTO `test`(`name`,`post_date`,`version`) VALUES ('"+v1+"','"+date+"','"+v2+"')", (err, result, fields) => {
        res.send(err+ "\n" + result + "\n" + fields);
    })
});

app.listen(port, () => {});