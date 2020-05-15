require('dotenv').config()

 const server = require('./server')

 const PORT = process.env.PORT || 5678

 server.listen(PORT, () => {
     console.log(`server is running on ${PORT}`)
 }) 