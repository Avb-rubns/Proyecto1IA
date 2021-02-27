import mongoose from "mongoose";
const { Schema } = mongoose;

export const deliverySchema = new Schema([
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
]);
