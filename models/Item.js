const mongoose = require("mongoose")
const User = require("./User")
const objectID = mongoose.Schema.Types.ObjectId



const  itemSchema = new mongoose.Schema({

    owner: {
        type: objectID,
        required: true,
        ref: "User"
    },

    name: {
        type:String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    timestamps: true

})


const Item = mongoose.model("Item", itemSchema)
module.exports = Item