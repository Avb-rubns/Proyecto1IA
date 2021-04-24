import { MongoDBService } from "../../services/mongo";
import { formatText } from "../../scripts/format";
import { Auth } from "../../services/auth";
import { v4 as uuidv4 } from "uuid";

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
            let token = uuidv4();
            await service.setToken(data.idUser, token.toString());
            res.status(200).send({ token });
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
        const { idUser, option } = req.query;
        if (!option) {
          const info = await service.getPackages(idUser);
          const data = formt.cretalistTable(info);
          res.status(200).send({ list: data });
          service.close();
        } else {
          const info = await service.getInfo(idUser);
          const user = formt.infoUser(info);
          res.status(200).send({ user });
          service.close();
        }
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
