//escribir la funcion orquesta de todos los sockets
const channels =(server)=>{
    //1. importar la libreria socket.io
    // ademas de pasarle el servidor http por referencia
    let io = require("socket.io")(server);


    //creamos nuestro primer evento (escucha[on])
    io.on("connect",socket =>{//socket es una conexion (tunel) entre el cliente y el servidor
        console.log("Un cliente se ha conectado"+socket.client.id);

        //las suscripciones, es decir los canales de escucha y emision
        socket.on("channel:saludo",saludo=>{
            console.log(saludo);

            io.emit("channel:saludo:resp",saludo);
        });
    
    //canal de desconexion
    socket.on("disconnect",()=>{
        console.log("Un cliente se ha desconectado!");
    });
    
    });

}


//explorar la funcion
module.exports = channels;