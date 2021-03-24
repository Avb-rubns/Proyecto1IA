import { formatText } from "../../scripts/format";
import { MapsService } from "../../services/maps";
import { MongoDBService } from "../../services/mongo";
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { entrega } = req.body;
      const textF = new formatText();
      const des = textF.createDirection(entrega);
      const id = textF.createID(entrega);

      const serviceMaps = new MapsService();
      const info = await serviceMaps.getInfo(des);

      const delivery = textF.createDelivery(info, id, entrega);
      const serviceMongo = new MongoDBService();
      const result = await serviceMongo.insertDelivery(delivery);
      serviceMongo.close();
      res.status(200).send(delivery);
      break;

    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
