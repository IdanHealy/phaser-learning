const express = require('express');
const app = express()
const http = require("http").Server(app);
const path = require('path')



app.get("/",function(req, res){
    res.sendfile("public/index.html")
});


http.listen(1000,function(){
    console.log("listening on *:1000")
});

app.use(express.static(path.join(__dirname, 'public')));
