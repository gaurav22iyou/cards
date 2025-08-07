const { Mongoose } = require("mongoose");

const UserModelSchema = Mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    contactNo: {

        type: Number,
        required: true,
    },

    website: {
        type: String,
        required: true,
    },

    companyName: {

        type: String,
        required: true,
    }

})

const cardModel = Mongoose.Model('User','UserModelSchema')

module.exports(cardModel);