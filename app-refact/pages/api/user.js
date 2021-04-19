import { MongoDBService } from "../../services/mongo";
import { formatText } from "../../scripts/format";
import { Auth } from "../../services/auth";

export default async function handler(req, res) {
  const service = new MongoDBService();
  const auth = new Auth();
  const formt = new formatText();
  switch (req.method) {
    case "POST":
      try {
        const { sesion } = req.body;
        const data = await service.login(sesion);
        if (data.msj === "Error L001") {
          res.status(404).send({ resp: "El usuario no esta registrado" });
          service.close();
        } else {
          if (await auth.validate(data, sesion)) {
            res.status(200).send(data);
            service.close();
          } else {
            res.status(403).send({ resp: "Contraseña o Correo erroneos" });
            service.close();
          }
        }
      } catch (error) {
        res.status(403).send({ resp: "Error-U-Auth" });
        service.close();
        console.log(error);
      }
      break;

    case "GET":
      try {
        const { idUser } = req.query;
        const info = await service.getPackages(idUser);
        const data = formt.cretalistTable(info);
        res.status(200).send({ list: data });
        service.close();
      } catch (error) {
        console.log("Error-Get" + error);
        res.status(403).send({ resp: "Error-02" });
        service.close();
      }
      break;
    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
