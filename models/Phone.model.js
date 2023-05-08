const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    manufacturer: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
    }, 
    color: {
        type: String, 
        required: true,
    },
    price: {
        type: Number, 
        required: true, 
    },
    imageFileName: {
        type: String, 
        required: true,
    }, 
    screen: {
        type: String, 
        required: true, 
    }, 
    processor: {
        type: String, 
        required: true,
    }, 
    ram: {
        type: Number, 
        required: true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;