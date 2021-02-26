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
      this.normalizeString(data.state);
    return dir;
  }
  normalizeString(string) {
    const res = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return res;
  }
}
