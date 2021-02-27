export class FMaps {
  createDir(data) {
    let dir =
      this.normalizeString(data.nameaddress) +
      "%20" +
      data.numhouse +
      "%20" +
      data.codepostal +
      "%20" +
      this.normalizeString(data.city) +
      "%20" +
      this.normalizeString(data.country);
    return dir;
  }
  normalizeString(string) {
    const res = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const auxres = res.trim();
    const ausres = auxres.replace(/\s/g, "%20");
    return ausres;
  }
  createCoord(data) {
    let dir = data.lat + "%2c" + data.lon;
    return dir;
  }
  createID(data) {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < 4; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    let id =
      data.username.substr(0, 2) +
      data.lastname.substr(0, 2) +
      "-" +
      this.normalizeString(data.nameaddress).substr(0, 2) +
      data.numhouse +
      "-" +
      str;
    return id.toLocaleUpperCase();
  }
}
