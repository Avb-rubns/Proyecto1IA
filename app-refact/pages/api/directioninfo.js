import { formatText } from "../../scripts/format";
import { MapsService } from "../../services/maps";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { entrega } = req.body;
      const textF = new formatText();
      const des = textF.createDirection(entrega);
      const service = new MapsService();
      const info = await service.getInfo(des);
      res.status(200).send(info);
      break;

    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
