const mongoose = require("mongoose")
const objectID = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({

    owner: {
        type: objectID,
        require: true,
        ref:"User"
    },

    items: [{
        itemId: {
            type: objectID,
            required: true,
            ref: "Item"
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1,
            price: Number
        }
    }],

    bill: {
        type: Number,
        required:true,
        default: 0
    },

    timestamps: true

})


const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart