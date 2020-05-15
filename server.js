const express = require('express')
 const server = express()
 const helmet = require('helmet')
 const cors = require('cors')

  const resourceRouter = require('./resources/resourcesRouter')
  const projectRouter = require('./projects/projectsRouter')
//  const taskRouter = require('./tasks/tasksRouter')

 server.use(express.json())
 server.use(helmet())
 server.use(cors())

  server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)


 server.get('/', (req,res) => {
     res.status(200).json({message: 'we be working'})
 })

 module.exports = server 