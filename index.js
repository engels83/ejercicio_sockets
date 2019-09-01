//1. obtener importar la libreria express
const app = require("express")();

//1.1 donde necesitamos el http de node js como server
const server = require("http").createServer(app); //importar libreria http

//usar path para publicar html
const path = require("path");

//2. instanciar el servidor express
//const app = express();

//2.1 pasarle los atributos de servidor http
//http.createServer(app);

//3. crear el puerto

const port = 3000;

// 4. crear un metodo GET inicial

app.get("/",(req, res)=>{
    //res.end("Hola desde web sockets!");

    res.sendFile(path.join(__dirname,"./views/index.html"));
});

//importar el channels

const channels = require ("./sockets");
channels(server);


//5. crear im ;ostemer de; servodpr
server.listen(port,()=>{
console.log("servidor inicalizado en http://localhost:"+port);

});


