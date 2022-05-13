const path = require("path");
const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Corriendo" + PORT);
});

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    //funcion controladora o handler
      res.sendFile(path.join(__dirname, "views/home.html"))
})

app.get("/register", (req, res) => {
    //funcion controladora o handler
      res.sendFile(path.join(__dirname, "views/register.html"))
})