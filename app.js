require('dotenv').config();
const express = require('express');
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');


// handlebars

console.log(process.env)

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials/', (error)=>{ console.log})

app.use(express.static('public'))

app.get('/', (req,res)=>{
    
    res.render('home',{
        nombre:'Fernando Herrera',
        titulo:'Curso de Node.js'
    })
})

app.get('/elements', (req,res)=>{
    
    res.render('elements',{
        nombre:'Fernando Herrera',
        titulo:'Curso de Node.js'
    })

})
app.get('/generic', (req,res)=>{
    
    res.render('generic',{
        nombre:'Fernando Herrera',
        titulo:'Curso de Node.js'
    })

})
app.get('*', (req,res)=>{
    
    res.render('404')

})

app.listen(port,()=>{
    console.log('La plicacion esta corriendo en el puerto: localhost:',port)
});




