import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Please enter name']},
    email: { type: String, required: [true, 'Please enter email']},
    password: { type: String, required: [true, 'Please enter password']}
},
{
    timestamps: true
})

export const User = mongoose.model('User', userSchema)