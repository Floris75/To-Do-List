const db = require("../db");

class List {
  constructor(props) {
    const {Name} = props;

    this.Name = Name;
  }

  static getAll(callback) {
    db.query("SELECT * FROM task_lists", (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }

      callback(null, result);
    })
  }
}

module.exports = List;