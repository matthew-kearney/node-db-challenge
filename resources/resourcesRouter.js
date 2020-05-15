const router = require('express').Router()

 const db = require('./resourcesModel')

 //get all resources
 router.get('/', (req,res) => {
    db.find()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Failed at rR.js 13'})
        })
})

//create new resource (requires rname and rdescription)
router.post('/', (req,res) => {
    db.add(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Failed to add resource'})
        })
})


 module.exports = router