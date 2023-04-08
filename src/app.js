const express = require('express')
const multer = require('multer')
const app = express()
const usersRouter = require('./routes/users.router.js')
const petsRouter = require('./routes/pets.router.js')

const logged = true

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//middleware
const validarUser = (req, res, next) => {
    if (logged) next()
    else res.status(401).json({ error: 'No tienes permisos para ver esta ruta' })
}
app.use(validarUser)

app.use('/contenido', express.static('public'))

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploader = multer({ storage })

app.use('/users', usersRouter)
// app.use('/usuarios', usersRouter)
app.use('/pets', uploader.single('foto'), petsRouter)

app.listen(8080, () => console.log('Server Up'))
