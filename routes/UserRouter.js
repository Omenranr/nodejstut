const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/UserCtrl')
const auth = require('../middleware/auth').auth

router.get('/selectAll', auth, (req, res, next) => {
    UserCtrl.selectAll(req, res, next)
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})

router.post('/insert', auth, (req, res, next) => {
    console.log("accessing user insert")
    UserCtrl.insert(req, res, next)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(505).json(err)
    })
})



module.exports = router

