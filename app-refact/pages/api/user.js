import { MongoDBService } from "../../services/mongo";
import { formatText } from "../../scripts/format";
import { Auth } from "../../services/auth";
import { MapsService } from "../../services/maps";
import { GraphD } from "../../scripts/graphD";
import prim from "../../scripts/prim";

export default async function handler(req, res) {
  const service = new MongoDBService();
  const format = new formatText();
  const auth = new Auth();
  const serviceMaps = new MapsService();
  switch (req.method) {
    case "POST":
      try {
        const { sesion } = req.body;
        const data = await service.login(sesion);
        if (data.msj === "Error L001") {
          res.status(404).send({ resp: "El usuario no esta registrado" });
          service.close();
        } else {
          if (await auth.validate(data, sesion)) {
            res.status(200).send(data);
            service.close();
          } else {
            res.status(403).send({ resp: "Contraseña o Correo erroneos" });
            service.close();
          }
        }
      } catch (error) {
        res.status(403).send({ resp: "Error-U-Auth" });
        service.close();
        console.log(error);
      }
      break;

    case "GET":
      try {
        const { idUser } = req.query;
        const route = await service.getRoute(idUser);
        const dir = await service.getDicUser(idUser);

        const originUser = format.createDirection(dir);
        const cleanOrigin = format.cleanString(originUser);

        let map = format.createTable(cleanOrigin, route);

        for (let [clave, _] of map) {
          let key = String(clave);
          let points = key.split("-");

          let res = await serviceMaps.getInfo(points[0], points[1]);
          let distance = res.rows[0].elements[0].distance.text;
          let duration = res.rows[0].elements[0].duration.text;
          map.set(clave, distance + "-" + duration);
        }

        //console.log(map);
        const g = new GraphD();
        const graph = g.createG(map);

        console.log(graph);
        const minimumSpanningTree = prim(graph);
        console.log(minimumSpanningTree.toString());
        /*console.log(route);*/
        res.status(200).send({ route });
        service.close();
      } catch (error) {
        console.log("Error-Get" + error);
        res.status(403).send({ resp: "Error-02" });
        service.close();
      }
      break;
    default:
      res.status(404).send({ result: "no entendi tu peticion" });
      break;
  }
}
