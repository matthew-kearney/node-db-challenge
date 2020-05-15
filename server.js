const express = require('express')
 const server = express()
 const helmet = require('helmet')
 const cors = require('cors')

const projectRouter = require('./projects/projectsRouter')
const resourceRouter = require('./resources/resourcesRouter')
const taskRouter = require('./tasks/tasksRouter')

 server.use(express.json())
 server.use(helmet())
 server.use(cors())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

 server.get('/', (req,res) => {
     res.status(200).json({message: 'we be working'})
 })

 module.exports = server 