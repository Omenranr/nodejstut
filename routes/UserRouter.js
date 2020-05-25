const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/UserCtrl')


router.get('/selectAll', (req, res, next) => {
    UserCtrl.selectAll(req, res, next)
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})

module.exports = router

