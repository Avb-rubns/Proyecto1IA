import { formatText } from "../../scripts/format";
import { MapsService } from "../../services/maps";
import { MongoDBService } from "../../services/mongo";
export default async function handler(req, res) {
  const serviceMaps = new MapsService();
  const textF = new formatText();
  const serviceMongo = new MongoDBService();

  switch (req.method) {
    case "POST":
      const { entrega } = req.body;
      const des = textF.createDirection(entrega);
      const id = textF.createID(entrega);

      const info = await serviceMaps.getInfo(des);

      const delivery = textF.createDelivery(info, id, entrega);
      if (entrega.idUser != "") {
        const register = true;
        await serviceMongo.insertDelivery(delivery, "", register);
      } else {
        const register = false;
        await serviceMongo.insertDelivery(delivery, "", register);
      }
      serviceMongo.close();
      res.status(200).send(delivery);
      break;

    case "DELETE":
      const { ids } = req.body;
      const r = await serviceMongo.deleteDelivery(ids, "");
      serviceMongo.close();
      res.status(200).send({ r });
      break;

    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
