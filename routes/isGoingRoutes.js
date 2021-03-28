const router = require('express').Router()
const { isGoing } = require('../models')
const passport = require('passport')

// GET all comments on posts on explore page
router.get('/isGoings', (req, res) => {
  isGoing.findAll({})
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
router.post('/isGoings', passport.authenticate('jwt'), (req, res) => {
  isGoing.create({
    check_going: req.body.check_going,
    user_id: req.user.id,
    post_id: req.body.post_id
  })
    .then(going => res.json(going))
    .catch(err => console.log(err))
})

// PUT one Comment
router.put('/isGoings/:id', passport.authenticate('jwt'), (req, res) => {
  isGoing.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router