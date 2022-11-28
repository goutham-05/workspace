const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
        },
        email: {
            type: String
        },
        seatingIds: {
            type: Array
        },
        startTime: {
            type: String
        },
        endTime: {
            type: String
        },
        isFullDay: {
            type: Boolean
        },
        companyName: {
            type: String
        },
        comments: {
            type: String
        }
    },

);

const BookingModule = mongoose.model('bookings', moduleSchema);

module.exports = BookingModule;