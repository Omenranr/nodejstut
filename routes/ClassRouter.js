const express = require('express')
const router = express.Router()
const ClassCtrl = require('../controllers/ClassCtrl')


router.get('/selectAll', (req, res, next) => {
    ClassCtrl.selectAll(req, res, next)
    .then(classrooms => {
        res.status(200).json(classrooms)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})

router.post('/insert', (req, res, next) => {
    console.log("accessing class insert")
    ClassCtrl.insert(req, res, next)
    .then(classroom => {
        console.log("return class insert obj", classroom)
        res.status(200).json(classroom)
    })
    .catch(err => {
        console.log("entered class insert error", err)
        res.json(err)
    })
})



module.exports = router
