import { formatText } from "../../scripts/format";
import { MapsService } from "../../services/maps";
import { MongoDBService } from "../../services/mongo";

export default async function handler(req, res) {
  const textF = new formatText();
  const serviceMaps = new MapsService();
  const serviceMongo = new MongoDBService();
  switch (req.method) {
    case "POST":
      try {
        const { entrega } = req.body;
        let des = textF.createDirection(entrega);
        des = textF.cleanString(des);
        const id = textF.createID(entrega);

        /* Pasar la direccion del usuario */
        let POINT_ORIGIN =
          "Av+Don+Juande+Palafox+y+Mendoza+Centro+72000+Puebla+Pue";

        const info = await serviceMaps.getInfo(POINT_ORIGIN, des);

        const delivery = textF.createDelivery(info, id, entrega);
        if (entrega.idUser != "") {
          const register = true;
          await serviceMongo.insertDelivery(delivery, "", register);
        } else {
          const register = false;
          await serviceMongo.insertDelivery(delivery, "", register);
        }
        res.status(200).send(delivery);
        serviceMongo.close();
      } catch (error) {
        res.status(404).send({ MSJ: "ERRO-PLD-P" });
        console.log("ERROR-PLD-P" + error);
        serviceMongo.close();
      }

      break;

    case "DELETE":
      try {
        const { ids } = req.body;
        const r = await serviceMongo.deleteDelivery(ids, "");
        serviceMongo.close();
        res.status(200).send({ r });
      } catch (error) {
        res.status(404).send({ msj: "ERROR-PLD-D" });
      }

      break;
    case "GET":
      try {
        res.status(200).send({});
      } catch (error) {
        console.log("ERRO-PL-02");
        res.status(404).send({ MSJ: "ERRO-PL-G" });
      }
      break;

    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
