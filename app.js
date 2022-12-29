const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');


app.use(express.static('public'));
app.use(express.static('views'))
app.set('view engine','hbs')
app.use(express.static('partials'))
hbs.registerPartials('partials')
app.get('/',(req,res)=>{
 res.render('index',{
  placeholder:'Abhisekh'
 })
});

app.get('/about',(req,res)=>{
  res.render('about',{
    placeholder:'Abhisekh'
   })
})
app.get('/contact',(req,res)=>{
  res.render('contact',{
    placeholder:'Abhisekh'
  })
})

app.get('/services',(req,res)=>{
  res.render('contact',{
    placeholder:'Abhisekh'
  })
  
  app.get('*',(req,res)=>{
    res.render('404',{
      error:"404 error"
    })
  })
})

app.listen('80',(req,res)=>{
  console.log('Listening started');
})