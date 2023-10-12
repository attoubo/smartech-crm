const express = require("express");

const cors = require("cors");
const mysql = require("mysql");


const app = express();
app.use(cors());

app.listen(8080, () =>{
    console.log("Node server's running !");
})


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rooot@123",
    database: "crud"
})

app.get("/", (req, res) => {
    // const sql = "SELECT * FROM student";
    // db.query(sql, (err, data) => {
    //     if(err) {
    //         return res.json(err);
    //     } else {
    //         return res.json(data);
    //     }
    // })
    res.json("Hello from the backend");
});  




// PROJECT TODOS

// starting project

// starting interface

// make datebase achitecture

// dont forget login page