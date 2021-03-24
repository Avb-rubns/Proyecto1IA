import { MongoDBService } from "../../services/mongo";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const service = new MongoDBService();
      const { sesion } = req.body;
      const be = await service.login(sesion);
      if (be == null) {
        be = { msj: "Usuario no exite" };
      }
      service.close();
      res.status(200).send(be);
      break;

    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
