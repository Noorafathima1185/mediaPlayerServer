// 1) import json server - library
const jsonServer = require('json-server')

// 2) create path for db.json file using router method/function - for storing data
const router = jsonServer.router("db.json")

// 3) create middleware to convert json to js - defaults()
const middleware = jsonServer.defaults()

// 4) create json server
const mediaPlayerServer = jsonServer.create()

// 5) server should use middleware and router
mediaPlayerServer.use(middleware) // first use this
mediaPlayerServer.use(router)     // and use this step

// 6) set port for server
const PORT = 9000 || process.env.PORT

// 7) run server
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})