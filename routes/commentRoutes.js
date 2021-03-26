const router = require('express').Router()
const { Comment } = require('../models')
const passport = require('passport')

// GET all comments on posts on explore page
router.get('/comments', (req, res) => {
  Comment.findAll({ })
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
  Comment.create({
    text: req.body.text,
    user_id: req.user.id,
    post_id: req.body.post_id
  })
    .then(comment => res.json(comment))
    .catch(err => console.log(err))
})

// PUT one Comment
router.put('/comments/:id', passport.authenticate('jwt'), (req, res) => {
  Comment.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one Comment
router.delete('/comments/:id', passport.authenticate('jwt'), (req, res) => {
  Comment.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router