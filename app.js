const request =require('request');  

const url1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/Ramnagar%20Fort%20Varanasi.json?access_token=pk.eyJ1IjoicmFodTQyMCIsImEiOiJjanh2bGNlOXEwMG80M2NxcGU3bXZmeG9xIn0.KRRlS5tNsnTMQ4aV2oU7og';

lat =0
lon=0
request({url:url1},(err,res)=>{
    const data =JSON.parse(res.body);
    lat=data.features[0].geometry.coordinates[0];
    lon=data.features[0].geometry.coordinates[1]
    console.log('Latitude is '+lat);
    console.log('Longitude is '+lon);
})


const url ='https://api.darksky.net/forecast/d44839f1541d6691085cad1ec06d7471/'+lon+','+lat+'?units=si';

request({url:url},(err,res)=>{
    const data =JSON.parse(res.body);
    console.log('The temperature is '+data.currently.temperature);
   
})
