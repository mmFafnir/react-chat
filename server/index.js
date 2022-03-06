const express = require('express');



const app = express();
const server = require('http').Server(app)

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
 });




const rooms = new Map([
    ['rooms', null],
    ['massages', []],
    

])

app.get('/rooms', (req,res) => {
    res.json(rooms);

});

io.on('connection', socket =>{
    console.log('user connect', socket)
})

server.listen(8888, (err) => {
    if(err){
        throw Error(err)
    }
    console.log('Server work')
});