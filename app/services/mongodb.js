import mongoose from "mongoose";
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
      return result;
    }
  }
}
