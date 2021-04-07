const { MAPS_URI, API_KEY_DISTANCE } = process.env;
export class MapsService {
  async getInfo(data) {
    try {
      let POINT_ORIGIN =
        "Av.+Don+Juande+Palafox+y.+Mendoza,Centro,72000,Puebla,Pue";

      const result = await fetch(
        MAPS_URI + POINT_ORIGIN + data + API_KEY_DISTANCE
      ).then((res) => res.json());
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
