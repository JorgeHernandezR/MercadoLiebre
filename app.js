const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.Port || 3000,function(){
    console.log('Servidor funcionando');
});


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register.html', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login.html', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/carrito.html', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});



