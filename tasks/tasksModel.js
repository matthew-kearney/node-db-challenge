const db = require('../data/dbConfig')

 module.exports = {
     find,
     findByProjectId,
     add
 }

 function find() {
     return db('tasks')
         .join('projects', 'project_id', 'projects.id')
         .select('task_description',
                     'notes',
                     'tasks.id',
                     'tasks.task_complete',
                     'tasks.project_id',
                     'project_name',
                     'project_description'
                  )
 }

 function findByProjectId(id) {
     return db('tasks').where({project_id: id})
 }

 function add(task) {
     return db('tasks').insert(task)
         .then(([id]) => id)
 }