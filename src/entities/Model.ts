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
============= EXAMPLE SCHEMA - ALL POSSIBILITIES ============

const typesResume = new mongoose.Schema({
  anySchemaKey: {
    type: String - Number - Boolean - null - undefined,
    required: true - false,
    maxlength: 50,
    minlength: 10,
    max: 18,
    min: 0,
    default: "anySchemaValue" - 42 - false - null - undefined,
    unique: true - false,
    enum: ["pendente", "fazendo", "concluido"],
    select: false - true
  }, 

  relatedSchemaEntityParent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ParentEntity' }],

  relatedSchemaEntitySon: { type: mongoose.Schema.Types.ObjectId, ref: 'SonEntity' }
  }, 
  { timestamps: true }
  );

  const model = mongoose.model('Model', typesResume)
*/

/* 
=================== TYPESCRIPT EXAMPLE ====================

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
*/

/* 
============ EXAMPLE PARENT ENTITY SCHEMA ================

const authorSchema = new mongoose.Schema({
  name: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

============ EXAMPLE SON ENTITY SCHEMA ===================

const bookSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
});
*/

// eof