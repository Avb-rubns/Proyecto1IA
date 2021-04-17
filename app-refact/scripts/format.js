export class formatText {
  /**
   *
   * @param {*} data : es la direccion del formulario de envio
   * @returns devuleve la direcion en formato para utilizar en maps
   */
  createDirection(data) {
    let dir =
      this.normalizeString(data.address, true) +
      "+" +
      (data.numhouse ?? "") +
      "+" +
      this.normalizeString(data.colonia, true) +
      "+" +
      data.postalcode +
      "+" +
      this.normalizeString(data.city, true) +
      "+" +
      this.normalizeString(data.state, true);
    return dir;
  }
  cleanString(string) {
    let res = "";
    res = string.replace(/[++]{2}/g, "+");
    return res;
  }
  /**
   *  remplaza la los espacios por un +, quita los signos de acentuacion
   * @param {*} string recibe una direccion y le formatea
   * quita signos de puntuacion y acentos
   * quita espacios al inicio y final
   *
   * @returns devuelve al direcion concatenada por +
   */
  normalizeString(string, option) {
    let res = NaN;
    res = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    res = res.trim();
    res = res.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, "");
    if (option) {
      res = res.replace(/\s/g, "+");
    }
    return res.toLocaleLowerCase();
  }
  /**
   *
   * @param {*} data : es la informacion del formulario de entrega
   * @returns devuelve el id de la entrega
   */
  createID(data) {
    let str = this.randStr();
    let id =
      data.username.substr(0, 2) +
      data.lastname.substr(0, 2) +
      "-" +
      this.initaddress(data.address) +
      (data.numhouse ?? "") +
      "-" +
      str;
    return id.toLocaleUpperCase();
  }

  /**
   *
   * @param {*} data es la informacion del formulario de registro
   * @returns  el idi del usuario
   */

  createIDUser(data) {
    let str = this.randStr();
    let num = "";
    if (data.numhouse != NaN) {
      num = data.numhouse;
    } else {
      num = this.numrand;
    }
    //console.log(this.initaddress(data.address));
    let id =
      data.username.substr(0, 2) +
      data.lastname.substr(0, 2) +
      this.initaddress(data.address) +
      num +
      str;
    return { idUser: id.toLocaleUpperCase() };
  }

  /**
   *
   * @param {*} data : informacion de la entrega por maps
   * @param {*} id id del delivery
   * @param {*} User informacion del cliente
   * @param {*} iduser id del cliente
   * @returns
   */
  createDelivery(data, id, User) {
    let result = NaN;
    result = {
      idDelivery: id,
      idUser: User.idUser,
      destination_addresses: data.destination_addresses[0],
      username: User.username,
      lastname: User.lastname,
      state: "",
      distance: data.rows[0].elements[0].distance.text,
      order: "",
      duration: data.rows[0].elements[0].duration.text,
    };
    return result;
  }

  /**
   *
   * @returns Devuelve un randon de longitud 4
   */
  numrand() {
    let chars = "0123456789";
    let str = "";
    for (let i = 0; i < 4; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }

  /**
   *
   * @returns devuelve un random de logitud 4 son numeros y letras
   */
  randStr() {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < 4; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }

  initaddress(string) {
    let ad = NaN;
    let res = "";
    ad = this.normalizeString(string, false);
    ad = ad.replace(/av|y|de|calz|blvrd|calle|san|don/g, "");
    ad = ad.trim();
    let aux = ad.split(" ");
    res = this.str2(aux);
    return res;
  }
  /**
   *
   * @param {*} aux  arrglo de str
   * @returns devuelve un str de logitud 2
   */
  str2(aux) {
    let res = "";
    if (aux.length >= 2) {
      for (let i = 0; i < aux.length; i++) {
        if (aux[i].length > 2) {
          res += aux[i].substr(0, 1);
        }
      }
    } else {
      for (let i = 0; i < aux.length; i++) {
        if (aux[i].length > 2) {
          res += aux[i].substr(0, 2);
        }
      }
    }
    return res.substr(0, 2);
  }

  createTable(origen, route) {
    let table = new Map();
    let position = 1;
    for (let index = 0; index < route.length; index++) {
      table.set(
        origen +
          "-" +
          this.normalizeString(route[index].destination_addresses, true),
        route[index].distance + "-" + route[index].duration
      );
    }
    for (let index = 0; index < route.length; index++) {
      if (index < route.length) {
        for (let i = position; i < route.length; i++) {
          table.set(
            this.normalizeString(route[index].destination_addresses, true) +
              "-" +
              this.normalizeString(route[i].destination_addresses, true),
            0
          );
        }
        position += 1;
      } else {
        break;
      }
    }
    return table;
  }

  getClave(map) {
    let auxP1 = "";
    let list = [];
    for (const [clave, _] of map) {
      let point = String(clave).split("-");
      list.push(point[0]);
      auxP1 = point[0];
      break;
    }

    for (let [clave, _] of map) {
      let point = String(clave).split("-");
      if (auxP1 == point[0]) {
        list.push(point[1]);
      } else {
        break;
      }
    }
    return list;
  }
}
