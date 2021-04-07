import mongoose from "mongoose";
import { User } from "../schemas/userSchema";
import { Delivery } from "../schemas/deliverySchema";
import { ListDelyveries } from "../schemas/listDelyveries";

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
  async register(form, idUser) {
    try {
      const userNew = new User({ ...form, ...idUser });
      const be = await User.findOne({
        email: form.email,
      });
      let result = null;
      console.log(be);
      if (be == null) {
        await userNew.save();
        result = {
          description: "El registyro fue exitoso",
          type: "success",
          message: "Success Tips",
        };
      } else {
        result = {
          message: "Error",
          type: "error",
          description:
            "El correo con el que intentas registrarte ya tiene una cuenta, ¿Olvido su contraseña?",
        };
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
  async insertDelivery(delivery, user, register) {
    try {
      let result = NaN;
      const data = await User.findOne({ email: "prueba@mail.com" });
      const newDelivery = new Delivery({ ...delivery });
      if (register) {
        const dataC = await User.findOne({ idUser: delivery.idUser });
        dataC.packages.OTW.push(newDelivery);
        await dataC.save();
      } else {
        const d = await ListDelyveries.findOne({ id: "general" });
        d.deliveries.push(newDelivery);
        await d.save();
      }
      data.route.push(newDelivery);
      result = await data.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteDelivery(idDelivery, user) {
    try {
      let result = NaN;
      const dataOld = await User.findOne({ idUser: "RIPEJP7CJP" });
      console.log(dataOld);
      await User.updateOne(
        { idUser: "RIPEJP7CJP" },
        { $pull: { route: { idDelivery: idDelivery.id } } }
      );
      const dataU = await User.findOne({ idUser: "RIPEJP7CJP" });
      if (dataOld.route === dataU.route) {
        result = "Ocurrio un error al eliminar la entrega";
      } else {
        result = "Se elimino la entrega ";
      }

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
