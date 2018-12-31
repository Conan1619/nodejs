const express=require('express');
const hbs=require('hbs');


var app=express();
const port=process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(__dirname+ '/public'));


app.get('/',(req,res)=>{
    res.send('<h1>BROOOO!!!</h1>');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs')
})

app.get('/bad',(req,res)=>{
    res.send({
        errormsg:'fuck off broo',
        errorcode: 69
    });
});

app.listen(port,()=>{
    console.log('server is up maan')
});