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

/* 

export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
  password: string;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, minlength: 5, unique: true },
    age: { type: Number, required: true, min: 18 },
    isAdmin: { type: Boolean, default: false },
    password: { type: String, required: true, minlength: 5, select: false },
    characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

 status: {type: String, enum: ["pendente", "fazendo", "concluido"], required: true},
    user: { type: Schema.Types.ObjectId, ref: "User" }

*/

// eof