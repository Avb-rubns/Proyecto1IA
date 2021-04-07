import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    idUser: String,
    username: String,
    lastname: String,
    cell: String,
    email: String,
    password: String,
    address: String,
    colonia: String,
    numhouse: String,
    postalcode: String,
    city: String,
    state: String,
    route: [
      {
        idDelivery: String,
        idUser: String,
        destination_addresses: String,
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
          idDelivery: String,
          state: String,
          date: String,
        },
      ],
      OTW: [
        {
          idDelivery: String,
          state: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("user", userSchema);