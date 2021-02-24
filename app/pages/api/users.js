import { MongoDBService } from "../../services/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { register } = req.query;
    //console.log(register);
    if (register) {
      const { data } = req.body;
      console.log({ recibiendoda: data });
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
  } else {
    res.status(404).send({
      result: "error!! ",
    });
  }
}
