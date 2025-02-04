const express = require("express");
const app = express();

var  users = [{
    name : 'John',  
    kidneys : [{
        headlthy : false
    }, {
        headlthy : true
    }]
 }]
 console.log(users[0]);

 app.get("/" , function(req,res){
    const jhonKidneys = users[0].kidneys;
    const numberOfkidney = jhonKidneys.length;
    var headlthyKidney=0,unhealthyKidneys=0;
    
    for(let i=0; i<jhonKidneys.length; i++){
        if(jhonKidneys[i].headlthy) headlthyKidney++;
        else unhealthyKidneys++;
    }

    res.json({
        numberOfkidney,
        unhealthyKidneys,
        headlthyKidney
    });


 });

 app.listen(3000);
