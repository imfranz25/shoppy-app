const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  billingAddress: {
    fullName: String,
    contact: String,
    postalCode: String,
    label: String,
  },
  cart: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('user', userSchema);
