var express = require("express");
var app = express();
app.get("/", (req, res, next) => {
    res.json("Hey there......");
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});