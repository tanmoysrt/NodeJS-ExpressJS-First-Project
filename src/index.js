const express = require('express');
const app = express();
const path = require("path");
const hbs = require('hbs');
const requests = require('requests');
const port = process.env.PORT || 8000;

 
const staticpath = path.join(__dirname,"..","public");
const templatepath = path.join(__dirname,"..","templates");
const partialspath = path.join(__dirname,"..","templates","partials");

app.set('title','Hi first');
app.set("view engine","hbs");
app.set('views',templatepath);
hbs.registerPartials(partialspath);

app.use(express.static(staticpath))

app.get('/', (req,res)=>{
    const data = {
        myname:"Tanmoy",
    }
    res.render('./views/index',data);
})


app.get('/about',(req,res)=>{
    res.render("./views/about");
})

app.get('*',(req,res)=>{
    res.render("./views/404",{errorcomment:"404 Not found"})
})

app.listen(port,()=>{
    console.log(`Listeing at port ${port}`);
 });