const User = require('../models/User')


// SELECT, UPDATE, INSERT, DELETE, selectByName

exports.selectAll = (req, res, next) => {
    return new Promise((resolve, reject) => {
        User.find()
        .then(users => {
            console.log(users)
            resolve(users)
        })
        .catch(err => {
            reject(err)
        })
    })
}

exports.insert = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const user = new User ({
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        })
        user.save()
        .then(user => {
            resolve(user)
        })
        .catch(err => {
            resolve(err)
        })
    })
}