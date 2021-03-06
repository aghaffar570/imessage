const socket = io(); // url to server or
// client io connects to default host app that serves the page

// DOM nodes
const message = document.querySelector('#message'),
       handle = document.querySelector('#handle'),
          btn = document.querySelector('#btn'),
       output = document.querySelector('#output')

btn.addEventListener('click', (e) => {
  // e.preventDefault() // prevents page reload
  console.log('clicked')
  socket.emit('msg', {
    handle: handle.value,
    message: message.value
  })

  message.value = ''
})

socket.on('get-msg', (msg) => {
  console.log('got msg from BE', msg)
  output.innerHTML += `<div><span class="output-msg">${msg.handle} : ${msg.message}</span></div>`
})
