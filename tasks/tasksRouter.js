const router = require('express').Router()

 const db = require('./tasksModel')

 router.get('/', (req,res) => {
    db.find()
        .then(list => {
            res.status(200).json(list.map(item => {
                const tasks = {...item, task_complete : item.task_complete ? true : false}
                const {id, task_description, notes, task_complete, project_id, project_name, project_description} = tasks
                return {id, task_description, notes, task_complete, project:{project_id, project_name, project_description}}
            }))
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Failed to get tasks'})
        })
})


router.post('/', (req,res) => {
    db.add(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Failed to add task'})
        })
})



 module.exports = router