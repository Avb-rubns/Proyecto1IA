const { MAPS_URI, MAPS_URIDISTANCE, MAPS_ALTERDISTANCE } = process.env;
export class MapsService {
  async getDir(data) {
    try {
      const result = await fetch(MAPS_URI + data, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      const auxResult = result.data;
      const resultado = {
        lat: auxResult[0]["lat"],
        lon: auxResult[0]["lon"],
        dir: auxResult[0]["display_name"],
      };
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }

  async getRoute(data) {
    try {
      const result = await fetch(MAPS_URIDISTANCE + data + MAPS_ALTERDISTANCE, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      const auxResult = result.data.routes;
      let resultado = {
        distance: (auxResult[0]["distance"] / 1000).toFixed(2),
        duration: (auxResult[0]["duration"] / 60).toFixed(2),
      };
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }
}
