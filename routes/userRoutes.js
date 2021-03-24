const router = require('express').Router()
const { User, Post, Comment } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// router.get('/users/auth', passport.authenticate('jwt'), (req, res) => {
//   res.json(req.user)
// })


// router.get('/users/comments', (req, res) => {
//   User.authenticate()(req.body.comments, (err, user) => {
//     if (err) { console.log(err) }
//     res.json(user ? jwt.sign({id: user.id }, process.env.SECRET) : null)
//   })
// })

// router.get('/users/posts', (req, res) => {
//   User.authenticate()(req.body.posts, (err, user) => {
//     if (err) { console.log(err) }
//     res.json(user ? jwt.sign({id: user.id }, process.env.SECRET) : null)
//   })
// })

router.get('/users/comments', (req, res) => {
  User.findAll({include: [Comment, Post]})
    .then(users => {
      res.json(users)
    })
    .catch(err => { console.log(err) }) 
})



router.post('/users/register', (req, res) => {
  const { name, email, username, phone, bio } = req.body
  User.register(new User({ name, email, username, phone, bio }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})


// router.put('/users/comments', passport.authenticate('jwt'), (req, res) => {
//   User.update(req.body, { where: { id: req.user.id } }, { include: comments })
//     .then(() => res.sendStatus(200))
//     .catch(err => console.log(err))
// })

// router.delete('/users', passport.authenticate('jwt'), (req, res) => {
//   User.destroy({ where: { id: req.user.id } })
//     .then(() => res.sendStatus(200))
//     .catch(err => console.log(err))
// })

module.exports = router
