const express = require('express')
const router = express.Router()
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
})

const { userById } = require('../controllers/user')

router.param('userId', userById)

module.exports = router