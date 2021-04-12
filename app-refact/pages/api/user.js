import { MongoDBService } from "../../services/mongo";
import { Auth } from "../../services/auth";

export default async function handler(req, res) {
  const service = new MongoDBService();
  const auth = new Auth();
  switch (req.method) {
    case "POST":
      try {
        const { sesion } = req.body;
        const data = await service.login(sesion);
        console.log(data);

        /*if (data.msj === "Error L001") {
          res.status(404).send({ resp: "El usuario no esta registrado" });
          service.close();
        } else {
          if (await auth.validate(data, sesion)) {
            res.status(200).send(data);
            service.close();
          } else {
            res.status(403).send({ resp: "Contraseña o correo erroneos" });
            service.close();
          }
        }*/
      } catch (error) {
        res.status(403).send({ resp: "Error-01" });
        service.close();
        console.log(error);
      }
      break;

    case "GET":
      try {
        const { idUser } = req.query;
        //const route = await service.getRoute(id);
        res.status(200).send({ idUser });
      } catch (error) {
        console.log("Error-Get" + error);
        res.status(403).send({ resp: "Error-02" });
      }
      break;
    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
