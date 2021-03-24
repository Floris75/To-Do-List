const db = require("../db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM task_lists;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.getOne = (id, callback) => {
    db.query(`SELECT * FROM task_lists INNER JOIN tasks ON task_lists.id = tasks.task_list_id Where task_lists.id = ${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }

  exports.getTask = (id, callback) => {
    db.query(`SELECT *, DATE_FORMAT (creation_date, "%d %M %Y") as "date" FROM tasks Where tasks.id = ${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }

  exports.createOne = (list, callback) => {
    db.query(`INSERT INTO task_lists (name) VALUES ("${list.name}");`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }