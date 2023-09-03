const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    expiredDate: { type: Date, required: true },
    frequency: { type: String, required: true, default: 'MONTHLY' },
    isAvailable: { type: Boolean, required: true, default: true }
})

module.exports = mongoose.model('Subsciption', subscriptionSchema)