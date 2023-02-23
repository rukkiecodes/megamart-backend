const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const User = require("../../models/user")


router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user) {
      console.log("User exists")
      res.status(401).json({
        message: "Auth failed",
      })
    } else {
      bcrypt.hash(password, 12, async (err, hash) => {
        if (err) {
          res.status(401).json({
            message: "Auth failed",
          })
        } else {
          let newUser = {
            _id: new mongoose.Types.ObjectId(),
            name,
            email,
            password: hash,
          }
          user = await User.create(newUser)

          res.status(201).json({
            message: "Auth successful",
            user
          })
        }
      })
    }
  } catch (error) {
    console.error(error)
    res.status(401).json({
      message: "Auth failed",
    })
  }
})

module.exports = router