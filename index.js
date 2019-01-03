const express = require('express');
const app = express();
const server = app.listen(3000, () => console.log('Now serving chat app!'))

app.use(express.static('public'))

const io = require('socket.io')(server);


io.on('connection', (socket) => {
  // indiv clients
  console.log('*******New client connected!', socket.id);



  socket.on('msg', (msg) => {
    console.log(msg, 'MSG RETURNED FROM FE');
    io.sockets.emit('get-msg', msg)
  })

  // io.emit('')



  socket.on('disconnect', () => {
    console.log('client disconnecting!');
  })
})

