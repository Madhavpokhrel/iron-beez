import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    token: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model('User', userSchema);
