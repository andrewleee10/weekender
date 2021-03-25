const router = require('express').Router()
const { Comment } = require('../models')
const passport = require('passport')

// GET all comments
router.get('/comments', (req, res) => {
  Comment.findAll({})
    .then(comments => res.json(comments))
    .catch(err => console.log(err))
})

// GET one Comment
// router.get('/comments/:id', passport.authenticate('jwt'), (req, res) => {
//   Comment.findOne({ where: { id: req.params.id } })
//     .then(comment => res.json(comment))
//     .catch(err => console.log(err))
// })

// POST one Comment
router.post('/comments', passport.authenticate('jwt'), (req, res) => {
  Comment.create(req.body)
    .then(comment => res.json(comment))
    .catch(err => console.log(err))
})

// PUT one Item
router.put('/comments/:id', passport.authenticate('jwt'), (req, res) => {
  Comment.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one Item
router.delete('/comments/:id', passport.authenticate('jwt'), (req, res) => {
  Comment.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router