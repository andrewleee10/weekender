const router = require('express').Router()
const { join } = require('path')

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
})

router.get('/post', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'post.html'))
})

router.get('/profile', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'profile.html'))
})

router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

module.exports = router