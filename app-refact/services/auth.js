let bcrypt = require("bcryptjs");

export class Auth {
  async validate(data, session) {
    try {
      console.log(data);
      if (session.email === data.email) {
        let res = bcrypt.compareSync(session.password, data.password);
        return res;
      } else {
        return false;
      }
    } catch (error) {
      console.log("ErrorAuth" + error);
    }
  }
  async getDate(data) {
    for (let i = 0; i < data.length; i++) {
      if (data.name == "password") {
        data.splice(i, 1);
        break;
      }
    }
    return data;
  }
}
