const request =require('request');  

const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/Ramnagar%20Fort%20Varanasi.json?access_token=pk.eyJ1IjoicmFodTQyMCIsImEiOiJjanh2bGNlOXEwMG80M2NxcGU3bXZmeG9xIn0.KRRlS5tNsnTMQ4aV2oU7og';

request({url:url},(err,res)=>{
    const data =JSON.parse(res.body);
    console.log('Latitude is '+data.features[0].geometry.coordinates[0]);
    console.log('Longitude is '+data.features[0].geometry.coordinates[1]);
})
