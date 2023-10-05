const express = require('express');

const port = 80;
const app = express();

app.get('/',(req,res)=>{
    res.render("linkedin.html")
});

app.listen(port)