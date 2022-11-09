const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productCreator: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  productName: {
    type: String,
    unique: true,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productRatings: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  productShipping: {
    shippingFee: {
      type: Number,
      required: true,
    },
    shippingLocation: {
      type: String,
      required: true,
    },
  },
  productSpecification: {
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
    fields: {
      type: Object,
    },
  },
});

module.exports = mongoose.model('product', productSchema);
