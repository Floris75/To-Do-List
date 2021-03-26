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
    db.query(`SELECT *, DATE_FORMAT (creation_date, "%d / %m / %Y") as "date" FROM tasks Where tasks.id = ${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }

  exports.createList = (list, callback) => {
    db.query(`INSERT INTO task_lists (name) VALUES ("${list.name}");`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }

  exports.createTask = (id, task, callback) => {
    db.query(`INSERT INTO tasks (description, creation_date, done, task_list_id) VALUES ("${task.description}", NOW(), false, ${id});`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }

  exports.deleteList = (id, callback) => {
    db.query(`DELETE FROM task_lists WHERE id = ${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }

  exports.deleteTask = (id, callback) => {
    db.query(`DELETE FROM tasks WHERE id = ${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }

  exports.descriptionTask = (id, task, callback) => {
    db.query(`UPDATE tasks SET description="${task.description}" WHERE id = ${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }

  exports.doneTask = (id, callback) => {
    db.query(`UPDATE tasks SET done = !done WHERE id = ${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }