const { response } = require("express");
const lists = require("../models/lists");

exports.findAll = (request, response) => {
  lists.getAll((error, lists) => {
    if (error) {
      response.send(error.message);
    }

    response.render("home.ejs", { lists });
  });
}

exports.findOne = (request, response) => {
    const { id } = request.params;

    lists.getOne(id, (error, tasks) => {
      if (error) {
        response.send(error.message);
      }
      response.render("task_list.ejs", { tasks });
    });
  }

  exports.MoreDetails = (request, response) => {
    const { id } = request.params;

    lists.getTask(id, (error, task) => {
      if (error) {
        response.send(error.message);
      }
      
      response.render("task.ejs", { task });
    });
  }

  exports.addOne = (request, response) => {
    lists.createOne(request.body, (error, result) => {
      if (error) {
        response.send(error.message);
      }
      
      response.redirect("/");
    });
  }