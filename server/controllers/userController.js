const User = require('../models/userModel')

const loginUser = async(req, res) => {
    res.json({ msg: "Login"  })
}

const signupUser = async(req, res) => {
    res.json({ msg: "Signup" })
}

module.exports = {
    signupUser,
    loginUser
}