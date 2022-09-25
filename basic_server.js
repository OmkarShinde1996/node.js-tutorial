const http = require('http')

const server = http.createServer()
server.on('request', (req,res) => {
    res.write('This is a basic server')
    res.end()
})


server.listen(3000, ()=>{
    console.log('Server is started and listning on port 3000...');
})

//*******************Another way to write a server*******************/
// const server = http.createServer((req, res) => {
//     res.write('This is a basic server')
//     res.end()
// })

// server.listen(3000, ()=>{
//     console.log('Server is started and listning on port 3000...');
// })

