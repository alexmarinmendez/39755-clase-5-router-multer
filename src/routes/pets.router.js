const { Router } = require('express')

const router = Router()

const pets = []

// /pets/
router.get('/', (req, res) => {
    res.json({ pets })
})

router.post('/', (req, res) => {
    const pet = req.body
    console.log(pet)
    pets.push(pet)
    res.json({ pet })
})

router.put('/', (req, res) => {
    res.send('Hola desde PUT /pets')
})

router.delete('/', (req, res) => {
    res.send('Hola desde DELETE /pets')
})




module.exports = router