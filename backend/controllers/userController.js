import jwt from "jsonwebtoken"
import bcrypt from  "bcryptjs"
import asyncHandler from "express-async-handler"
import { User } from "../models/userSchema.js"


// register new user // route POST /users // access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter name, email, and password')
    }

    // check if user exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name,
        email,
        password : hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
           // token: generateToken(user._id),
            message: 'Registration successful'
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data!')
    }
})


// authenticate a user // route POST /login // access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    // check user email against password
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            message: 'Login successful',
        })
    } else {
        res.status(400)
        throw new Error('Invalid login credentials!')
    }
})


// get user data // GET POST /users/me // access Private
const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
        message: "Current User",
    })
})


// generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, )
}

export { registerUser, loginUser, getMe }