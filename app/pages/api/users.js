import { MongoDBService } from "../../services/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { form } = req.body;
    const service = new MongoDBService();
    await service.login(form);
    res.status(200).send({ result: form });
  } else {
    res.status(200).send({
      result:
        "David es malo no me quiere ayudar, bueno si pero no a mira ya no se lo que scribo a de ser porque esto pero esta de mas mira yo no se ",
    });
  }
}
