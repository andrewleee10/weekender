const router = require('express').Router()
const { Post } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/posts/:id', passport.authenticate('jwt'), (req, res) => {
  Post.findOne({ where: { id: req.params.id } })
    .then(post => res.json(item))
    .catch(err => console.log(err))
})

router.post('/posts', passport.authenticate('jwt'), (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description
  })
  .then(post => res.json(post))
  .catch(err => console.log(err))
})

router.put('/posts/:id', passport.authenticate('jwt'), (req, res) => {
  Post.update(req.body, { where: {id: req.params.id} })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/posts/:id', passport.authenticate('jwt'), (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})



module.exports = router