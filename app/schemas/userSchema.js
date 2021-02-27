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
    country: String,
    route: [
      {
        id: String,
        dir: String,
        username: String,
        lastname: String,
        state: String,
        distance: String,
        order: String,
        duration: String,
      },
    ],
    packages: {
      received: [
        {
          id: String,
          state: String,
          date: String,
        },
      ],
      OTW: [
        {
          id: String,
          state: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);
