import mongoose from "mongoose";
import { delLocale } from "next/dist/next-server/lib/router/router";
import { deliverySchema } from "../schemas/deliveryScheme";
import { userSchema } from "../schemas/userSchema";

const { MONGO_URI } = process.env;

export class MongoDBService {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  close() {
    mongoose.connection.close();
  }

  async login(user) {
    try {
      const User = mongoose.model("User", userSchema);
      const result = await User.findOne({
        email: user.username,
        password: user.password,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return result;
    }
  }

  async register(form) {
    try {
      const User = mongoose.model("User", userSchema);
      const userNew = new User({ ...form });
      console.log(userNew);
      const result = await userNew.save();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return result;
    }
  }
  async insertDelivery(delivery) {
    try {
      let result = NaN;
      const User = mongoose.model("User", userSchema);
      const data = await User.findOne({ email: "prueba@mail.com" });
      const Delivery = mongoose.model("Delivery", deliverySchema);
      const newDelivery = new Delivery({ ...delivery });
      data.route.push(newDelivery);
      result = await data.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async getDeliveries(id) {
    try {
      let result = NaN;
      const User = mongoose.model("User", userSchema);
      const data = await User.findOne({ email: "prueba@mail.com" });
      result = data.route;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
