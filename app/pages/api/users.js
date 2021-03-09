import { MongoDBService } from "../../services/mongodb";

export default async function handler(req, res) {
  let result = NaN;
  switch (req.method) {
    case "GET":
      try {
        const service = new MongoDBService();
        result = await service.getDeliveries("aqui va el id");
        service.close();
        res.status(200).send(result);
      } catch (error) {
        console.log(error);
      }
      break;
    case "POST":
      const { register } = req.query;
      if (register) {
        const { data } = req.body;
        const service = new MongoDBService();
        result = await service.register(data);
        service.close();
        res.status(200).send({ result: result });
      } else {
        const { form } = req.body;
        const service = new MongoDBService();
        result = await service.login(form);
        service.close();
        res.status(200).send({ result: result });
      }
      break;
    case "PUT":
      const { data } = req.body;
      const service = new MongoDBService();
      result = await service.insertDelivery(data);
      service.close();
      res.status(200).send({ result: result });
      break;
    case "PATCH":
      break;
    case "DELETE":
      break;

    default:
      res.status(200).send({ result: "no te entendi" });
      break;
  }
}
