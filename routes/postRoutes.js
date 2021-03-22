const router = require('express').Router()
const { Post } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')



router.post('/posts', (req, res) => {
  const { title, description } = req.body
  Post.post(new Post({ title, description }), err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})





module.exports = router