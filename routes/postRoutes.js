const router = require('express').Router()
const { Post, User, Comment } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')


// FIND ALL posts on explore page 
router.get('/posts', (req, res) => {
  Post.findAndCountAll({ include: [User, Comment]})
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})


// FIND ONE specifc post (?)
router.get('/posts/:id', (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    include: [User, Comment]
  })
    .then(post => res.json(post))
    .catch(err => console.log(err))
})


// CREATE a new post when logged in
router.post('/posts', passport.authenticate('jwt'),  (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    dateTime: req.body.dateTime,
    user_id: req.user.id
  })
    .then(post => res.json(post))
    .catch(err => console.log(err))
})


// UPDATE post when logged in
router.put('/posts/:id', passport.authenticate('jwt'), (req, res) => {
  Post.update(req.body, {
    where: { id: req.params.id }
  })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


// DELETE post when logged in
router.delete('/posts/:id', passport.authenticate('jwt'), (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})



module.exports = router