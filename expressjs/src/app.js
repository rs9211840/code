const path=require('path');

const express =require('express');

const hbs=require('hbs');
const app = express(); 

const partialPath =path.join(__dirname,'../views');
console.log(partialPath)
// console.log(path.join(__dirname,'../public/index.html'));
//Below line will update the root by index.html lying inside public
//app.use(express.static(path.join(__dirname,'../public/')));

app.set('view engine','hbs');
app.set('views', partialPath);
hbs.registerPartials(partialPath);
app.get('',(req,res) =>{

   // res.send(path.join(__dirname,'../public/index.html'));
  // app.use(express.static(path.join(__dirname,'../public/')));
    res.render('index',{
        name:'rahul'
    })
//    res.send('Send the response i m root');
})

app.get('/help',(req,res)=>{

   // res.send('Hello don\'t worry i will help you');

   /*res.sendFile('help.html', {
    root: path.join(__dirname, '../public/')
    })
    */
   res.render('help',{
       name:'rahul'
   })
})

app.get('/wheather',(req,res)=>{

    //res.send('Mausam acha hai');

    res.sendFile('wheather.html', {
        root: path.join(__dirname, '../public/')
        })
})

app.get('/about',(req,res)=>{
    res.render('about')
    //res.send('My name is Anthony Gonsalvis');

    /*res.sendFile('about.html', {
        root: path.join(__dirname, '../public/')
        })*/
})

// app.get('*',()=>{
//     app.send('Bhai aissa koi page he nai hai');
// })
app.listen(3000,()=>{
    console.log('server is running');
});