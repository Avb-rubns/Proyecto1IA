import { MapsService } from "../../services/maps";
import { FMaps } from "../../scripts/plan";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { entrega } = req.body;
      const map = new FMaps();
      const dir = map.createDir(entrega);
      const id = map.createID(entrega);
      const service = new MapsService();
      const result = await service.getDir(dir);
      res.status(200).send({ ...result, id });
      break;

    case "GET": {
      try {
        const { lat, lon } = req.query;
        const map = new FMaps();
        const des = map.createCoord({ ...data, lat, lon });
        const service = new MapsService();
        const result = await service.getRoute(des);
        res.status(200).send(result);
      } catch (error) {
        res.status(404).send("Error in get");
      }
      break;
    }
    case "DELETE": {
      break;
    }
    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
