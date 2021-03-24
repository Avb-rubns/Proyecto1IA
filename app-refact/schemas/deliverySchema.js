import mongoose from "mongoose";
const { Schema } = mongoose;

const deliverySchema = new Schema([
  {
    id: String,
    destination_addresses: String,
    username: String,
    lastname: String,
    state: String,
    distance: String,
    order: String,
    duration: String,
  },
]);
export const Delivery = mongoose.model("delivery", deliverySchema);
