const router = require('express').Router()
const { Post } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/users/auth', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user.items)
})


router.post('/users/register', (req, res) => {
  const { name, email, username } = req.body
  User.register(new User({ name, email, username }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})



module.exports = router