import mongoose from "mongoose"

/* This is for typing the entity with "what should I receive".
It works like typescript.
*/

const SomethingSchema = new mongoose.Schema({
  something: String,
}, { timestamps: true })

const Model = mongoose.model('Product', SomethingSchema)

export { Model }

/* 
Schema Example:

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 0,
    min: 0
  },
  email: {
    unique: true
  }
}, {
  timestamps: true
})

const Product = mongoose.model('Product', ProductSchema)

*/

// eof