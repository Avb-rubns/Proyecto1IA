const { MAPS_URI } = process.env;
export class MapsService {
  async getDir(data) {
    try {
      console.log({ MAPS_URI: data });
      const result = await fetch(MAPS_URI + data, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      const auxResult = result.data;
      //console.log(auxResult[0]);
      let resultado = {
        lat: auxResult[0]["lat"],
        lon: auxResult[0]["lon"],
        dir: auxResult[0]["display_name"],
      };
      return resultado;
    } catch (error) {}
  }
}
