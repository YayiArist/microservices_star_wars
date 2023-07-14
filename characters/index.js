const server = require('./src/server')
require('dotenv').config();


const PORT = process.env.PORT

server.listen(PORT, ()=>{
console.log(`Characters service listening on port ${PORT}`)
})