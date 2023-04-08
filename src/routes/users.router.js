const { Router } = require('express')

const router = Router()

// /users/
router.get('/', (req, res) => {
    res.send('Hola desde GET /users')
})

router.post('/', (req, res) => {
    res.send('Hola desde POST /users')
})

router.put('/', (req, res) => {
    res.send('Hola desde PUT /users')
})

router.delete('/', (req, res) => {
    res.send('Hola desde DELETE /users')
})




module.exports = router