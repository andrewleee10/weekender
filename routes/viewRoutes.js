const router = require('express').Router()
const { join } = require('path')

<<<<<<< HEAD
router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
})

router.get('/post', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'post.html'))
=======
router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/post', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'loading.html'))
>>>>>>> 8f7d4cedfc3593d881e797e93f2880f841e839c4
})

router.get('/profile', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'profile.html'))
})

<<<<<<< HEAD
router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
=======
router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
>>>>>>> 8f7d4cedfc3593d881e797e93f2880f841e839c4
})

module.exports = router