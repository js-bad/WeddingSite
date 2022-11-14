var mongoose = require('mongoose')
var Schema = mongoose.Schema

const RSVPSchema = new Schema({
    guestName: {
        type: String,
        required: true
    },
    attending: {
        type: Boolean,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    groupID: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: false
    },
    isPlusOne: {
        type: Boolean,
        default: false,
        required: false
    },
    isVaccinated: {
        type: Boolean,
        required: false
    }
})

module.exports = Rsvp = mongoose.model('rsvp', RSVPSchema)