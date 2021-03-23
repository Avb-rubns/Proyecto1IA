export class formatText {
  createDirection(data) {
    let dir =
      "&destinations=" +
      this.normalizeString(data.address).toLocaleLowerCase() +
      "+" +
      data.numhouse +
      "," +
      this.normalizeString(data.colonia).toLocaleLowerCase() +
      "," +
      data.postalcode +
      "," +
      this.normalizeString(data.city).toLocaleLowerCase() +
      "," +
      this.normalizeString(data.state).toLocaleLowerCase();
    return dir;
  }

  normalizeString(string) {
    const res = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const auxres = res.trim();
    const ausres = auxres.replace(/\s/g, "+");
    return ausres;
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
