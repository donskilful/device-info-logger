import express from "express";
var app = express();
import device from "express-device";
app.use(device.capture());

app.get("/hello", function (req, res) {
  res.send("Hi to " + req.device.type.toUpperCase() + " User");
});

app.listen(3000);
console.log("Listening to Port 3000");
