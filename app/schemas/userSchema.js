import mongoose from "mongoose";
const { Schema } = mongoose;

export const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    cell: String,
    email: String,
    password: String,
    nameaddress: String,
    colonia: String,
    numhouse: String,
    codepostal: String,
    city: String,
    state: String,
    route: [String],
    packages: {
      received: [String],
      OTW: [String],
    },
  },
  {
    timestamps: true,
  }
);
