const express = require('express');

const app= express(); //server created

app.get('/',(req,res)=>{
   // res.status(200).send('<h>this is my landing Page</h1>')
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>This is my About us</h1>')
})

app.get('/contact',(req,res)=>{
    res.status(200).send('<h1>contact us</h1>')
})
app.listen(5000,()=>console.log('server started'))