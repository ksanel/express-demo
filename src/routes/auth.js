// Requirements
const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// Register controller
router.post("/register", async (req, res) => {
    const newUser = new User({
        username : req.body.username,
        email    : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    })

    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch (err){
        res.status(500).json(err)
    }
})

// Login controller
router.post("/login", async (req, res) => { 
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(401).json("User not found")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET)
        const passwd = hashedPassword.toString(CryptoJS.enc.Utf8)

        passwd !== req.body.password && res.status(401).json("Password wrong")

        const accessToken = jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SECRET,
            {expiresIn: "3d"}
        )

        const {password, ...others} = user._doc
        res.status(200).json({...others, accessToken}) 
    }catch (err){
        res.status(500).json(err)
    }
})

module.exports = router