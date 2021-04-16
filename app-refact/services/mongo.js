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
      });
      return be;
    } catch (error) {
      console.log(error);
      return { msj: "Error L001" };
    }
  }

  /* nota: modificar para qeu sea el id del repartidor y no su correo */
  async insertDelivery(delivery, user, register) {
    try {
      let result = NaN;
      const data = await User.findOne({ email: "prueba@mail.com" });
      const newDelivery = new Delivery({ ...delivery });
      if (register) {
        const dataC = await User.findOne({ idUser: delivery.idUser });
        dataC.otw.push(newDelivery);
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
  /* nota: modificar para qeu sea el id del repartidor y no su correo */
  async deleteDelivery(ids, user) {
    try {
      console.log(ids);
      let result = NaN;
      const dataOld = await User.findOne({ email: "prueba@mail.com" });
      console.log(dataOld);
      if (ids.idUser != "") {
        await User.updateOne(
          { email: "prueba@mail.com" },
          { $pull: { route: { idDelivery: ids.idDelivery } } }
        );
        await User.updateOne(
          { idUser: ids.idUser },
          { $pull: { otw: { idDelivery: ids.idDelivery } } }
        );
      } else {
        await User.updateOne(
          { email: "prueba@mail.com" },
          { $pull: { route: { idDelivery: ids.idDelivery } } }
        );
        await ListDelyveries.updateOne(
          { id: "general" },
          { $pull: { deliveries: { idDelivery: ids.idDelivery } } }
        );
      }
      const dataU = await User.findOne({ email: "prueba@mail.com" });
      if (dataOld.route === dataU.route) {
        result = "Ocurrio un error al eliminar la entrega";
      } else {
        result = "Se elimino la entrega ";
      }

      return result;
    } catch (error) {
      console.log(error);
      return (result = { msj: "Error en eliminar" });
    }
  }

  async getRoute(idUser) {
    try {
      let result = NaN;
      const data = await User.findOne({ idUser: idUser });
      result = data.route;
      return result;
    } catch (error) {
      console.log(error);
      return { msj: "Error al obtener Route" };
    }
  }
  async getDicUser(idUser) {
    try {
      let result = NaN;
      const data = await User.findOne({ idUser: idUser });
      result = {
        address: data.address,
        colonia: data.colonia,
        numhouse: data.numhouse,
        postalcode: data.postalcode,
        city: data.city,
        state: data.state,
      };
      return result;
    } catch (error) {
      console.log(error);
      return { msj: "Error al obtener Route" };
    }
  }
}
