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
      console.log(tasks);

      response.render("task_list.ejs", { tasks });
    });
  }

  exports.MoreDetails = (request, response) => {
    const { id } = request.params;

    lists.getTask(id, (error, tasks) => {
      if (error) {
        response.send(error.message);
      }
      
      const task = tasks[0];

      response.render("task.ejs", { task });
    });
  }

  exports.addList = (request, response) => {
    lists.createList(request.body, (error, result) => {
      if (error) {
        response.send(error.message);
      }
      
      response.redirect("/");
    });
  }

  exports.addTask = (request, response) => {
    const { id } = request.params;

    lists.createTask(id, request.body, (error, result) => {
      if (error) {
        response.send(error.message);
      }
      
      response.redirect(`/task_lists/${id}`);
    });
  }

  exports.removeList = (request, response) => {
    const { id } = request.params;

    lists.deleteList(id, (error, result) => {
      if (error) {
        response.send(error.message);
      }
      
      response.redirect("/");
    });
  }

  exports.removeTask = (request, response) => {
    const { id_list, id_task } = request.params;

    lists.deleteTask(id_task, (error, result) => {
      if (error) {
        response.send(error.message);
      }
      
      response.redirect(`/task_lists/${id_list}`);
    });
  }

  exports.updateDescription = (request, response) => {
    const { id } = request.params;

    lists.descriptionTask(id, request.body, (error, result) => {
      if (error) {
        response.send(error.message);
      }
      
      response.redirect(`/task/${id}`);
    });
  }

  exports.updateDone = (request, response) => {
    const { id } = request.params;

    lists.doneTask(id, (error, result) => {
      if (error) {
        response.send(error.message);
      }
      
      response.redirect(`/task/${id}`);
    });
  }