const path=require('path');

const express =require('express');

const app = express(); 

console.log(path.join(__dirname,'../public/index.html'));
//Below line will update the root by index.html lying inside public
app.use(express.static(path.join(__dirname,'../public/')));

/*app.get('',(req,res) =>{

   // res.send(path.join(__dirname,'../public/index.html'));
   //app.use(express.static(path.join(__dirname,'../public/')));

   res.send('Send the response i m root');
})
*/
app.get('/help',(req,res)=>{

    res.send('Hello don\'t worry i will help you');
})

app.get('/wheather',(req,res)=>{

    res.send('Mausam acha hai');
})

app.get('/about',(req,res)=>{

    res.send('My name is Anthony Gonsalvis');
})


app.listen(3001,()=>{
    console.log('server is running');
});