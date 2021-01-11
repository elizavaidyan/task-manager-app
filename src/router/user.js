const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

//Create Users ; Resource(user) EndPoints for creating
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

//Login

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)  //It calls the userSchema.statistics.findByCredentials in user.js in models directory
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

//Logout user

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//Logout All

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//Read Users

router.get('/users/me', auth, async (req, res) => {

    res.send(req.user)
})

//Read a user by UserID
/*
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
       
        const user = await User.findById(_id)
        
        if (!user) {
            
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})
*/
//Update user 

router.patch('/users/me', auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }
    try {

        const user = req.user

        updates.forEach((update) => user[update] = req.body[update])

        await user.save() //Middleware is executed here
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Delete user 

router.delete('/users/me', auth, async (req, res) => {
    try {
        /* const user = await User.findByIdAndDelete(req.user._id)

        if (!user) {
            res.status(404).send()
        }  */

        await req.user.remove()

        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router