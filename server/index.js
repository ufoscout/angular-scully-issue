const express = require('express');

const app = express();

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//const menu = require('./routes/menu');
//app.use('/menu', menu);

app.get("/api/users", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });