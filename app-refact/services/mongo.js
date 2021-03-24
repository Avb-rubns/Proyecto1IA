import mongoose from "mongoose";
import { User } from "../schemas/userSchema";
import { Delivery } from "../schemas/deliverySchema";

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
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.close();
  }
  async register(form) {
    try {
      const userNew = new User({ ...form });
      const be = await this.login(form);
      let result = null;
      if (be == null) {
        result = await userNew.save();
      } else {
        result = { msj: "Usuario ya exite" };
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async login(form) {
    try {
      let be = null;
      be = await User.findOne({
        email: form.email,
        password: form.password,
      });
      return be;
    } catch (error) {
      console.log(error);
    }
  }
  async insertDelivery(delivery, user) {
    try {
      let result = NaN;
      const data = await User.findOne({ email: "prueba@mail.com" });
      const newDelivery = new Delivery({ ...delivery });
      data.route.push(newDelivery);
      result = await data.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
