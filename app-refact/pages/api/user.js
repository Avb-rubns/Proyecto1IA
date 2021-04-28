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
        console.log("Login", data);
        if (data !== null) {
          console.log("Login- entre", data);
          if (await auth.validate(data, sesion)) {
            let token = uuidv4();
            await service.setToken(data.idUser, token.toString());
            res.status(200).send({ token });
            service.close();
          } else {
            res
              .status(403)
              .send({ token: "", msj: "Contraseña o Correo erroneos" });
            service.close();
          }
        } else {
          res
            .status(404)
            .send({ token: "", mjs: "El usuario no esta registrado" });
          service.close();
        }
      } catch (error) {
        res.status(403).send({ resp: "Error-U-Auth" });
        service.close();
        console.log(error);
      }
      break;

    case "GET":
      try {
        const { idUser, option, token } = req.query;
        if (!option) {
          const info = await service.getPackages(idUser);
          const data = formt.cretalistTable(info);
          res.status(200).send({ list: data });
          service.close();
        } else {
          const info = await service.getInfo(token);
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

    case "DELETE":
      try {
        const { idUser, token } = req.body;
        console.log(token, idUser);
        const result = await service.deleteToken(idUser, token);
        service.close();
        res.status(200).send({ result });
      } catch (error) {
        res.status(404).send({ msj: "Error" });
        service.close();
      }

      break;
    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      service.close();
      break;
  }
}
