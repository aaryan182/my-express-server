const express = require("express");

const app = express();

app.get("/", function(req,res) {
    res.send("<h1>Hello Everyone </h1>");
});

app.get("/about", function(req,res) {
    res.send("Myself Aaryan, i am a trader");
});

app.get("/contact", function(req,res) {
    res.send("Contact me at 893427528947");
});

app.get("/hobbie", function(req,res) {
    res.send("Playing cricket");
});

app.listen(3000, function () {
    console.log("server started at port 3000");
}); 