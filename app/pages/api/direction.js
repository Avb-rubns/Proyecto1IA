import { MapsService } from "../../services/maps";
import { FMaps } from "../../scripts/plan";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { entrega } = req.body;
      const map = new FMaps();
      console.log({ Recibo_de_plan: entrega });
      const dir = map.createDir(entrega);
      const service = new MapsService();
      const result = await service.getDir(dir);
      res.status(200).send({ result: result });
      break;

    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
