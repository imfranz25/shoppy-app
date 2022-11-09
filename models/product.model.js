const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productCreator: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  productName: {
    type: String,
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
    },
  ],
  // productRatings  [{
  // 	userId: ObjectID
  // 	Comment (type: String)
  // Rating : type Number,

  // }]
  // productShipping {
  // 	shippingFee (type: Number)
  // 	shippingLocation (type: String)
  // }
  // productSpecification : {
  // category (type: String)
  // stock
  // Fields:{
  // Key:value - string
  // }
  // }
});

module.exports = productSchema;
