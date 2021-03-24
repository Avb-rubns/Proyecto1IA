import { MongoDBService } from "../../services/mongo";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const service = new MongoDBService();
      const { formR } = req.body;
      const result = await service.register(formR);
      service.close();
      res.status(200).send({ result });
      break;

    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
