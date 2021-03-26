const router = require('express').Router()

router.use(require('./viewRoutes.js'))
router.use('/api', require('./commentRoutes.js'))
router.use('/api', require('./postRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./isGoingRoutes.js'))

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>')
})

module.exports = router
