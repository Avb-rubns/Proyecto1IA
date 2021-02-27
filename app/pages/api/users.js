import { MongoDBService } from "../../services/mongodb";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      break;
    case "POST":
      const { register } = req.query;
      if (register) {
        const { data } = req.body;
        const service = new MongoDBService();
        const result = await service.register(data);
        service.close();
        res.status(200).send({ result: result });
      } else {
        const { form } = req.body;
        const service = new MongoDBService();
        const result = await service.login(form);
        service.close();
        res.status(200).send({ result: result });
      }
      break;
    case "PUT":
      const { data } = req.body;
      const service = new MongoDBService();
      const result = await service.insertDelivery(data);
      service.close();
      res.status(200).send({ result: result });
      break;
    case "PATCH":
      break;
    case "DELETE":
      break;

    default:
      break;
  }
}
