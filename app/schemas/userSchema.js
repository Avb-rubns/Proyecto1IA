import mongoose from "mongoose";
const { Schema } = mongoose;

export const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    telephone: Number,
    email: String,
    password: String,
    nameaddress: Boolean,
    colonia: String,
    numerhouse: Number,
    codepostal: Number,
    city: String,
    state: String,
  },
  {
    timestamps: true,
  }
);
