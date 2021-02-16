const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send("Welcome to home page");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to about page");
})


app.get('/contact',(req,res)=>{
    res.send("Welcome to contact page");
})

app.get('/temp',(req,res)=>{
    res.send("Welcome to temp page");
})

app.listen(port,(err)=>{
    console.log(err);
});