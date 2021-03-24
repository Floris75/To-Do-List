const { response } = require("express");
const List = require("../models/lists");

exports.findAll = (request, response) => {
  List.getAll((error, lists) => {
    if (error) {
      response.send(error.message);
    }

    console.log("Listes de taches ", lists);

    response.render("home.ejs", { lists });
  });
}