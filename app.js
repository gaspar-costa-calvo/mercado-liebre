const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Corriendo" + PORT);
});

app.listen (PORT, ()=> {
       console.log ('El Servidor esta corriendo en el puerto ' + PORT);
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

app.get("/login", (req, res) => {
  //funcion controladora o handler
    res.sendFile(path.join(__dirname, "views/login.html"))
})