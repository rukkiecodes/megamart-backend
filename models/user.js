const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  avatar: { type: String },
  rating: { type: Number },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  gender: { type: String },
  state: { type: String },
  lga: { type: String },
  specialty: { type: String },
  description: { type: String },
  verified: Boolean
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)