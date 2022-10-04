//Agrega un evento al botón
const boton = document.getElementById("#boton")
boton.addEventListener("click", () => {
    alert("Haz hecho click en el botón");
})

//Crea un servidor
const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

//Botón JQuerry
const jquerry-btn = document.querySelector("#jquerry-btn");
jquerry-btn.addEventListener("jquerry", () => {
    console.log("Hola, estoy utilizando jQuery")
})
