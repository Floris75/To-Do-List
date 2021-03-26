CREATE DATABASE to_do_list;

USE to_do_list;

CREATE TABLE task_lists (
    id integer auto_increment,
    name varchar(120),
    primary key (id)
);

CREATE TABLE tasks (
    id integer auto_increment,
    description varchar(500),
    creation_date date,
    done boolean,
    task_list_id integer not null,
    primary key (id),
    foreign key (task_list_id) references task_lists(id)
);

INSERT INTO task_lists (name)
VALUES ('Partir en vacance'), ('Orgarniser un mariage'), ('Faire le ménage'), ('Préparer un gâteau');

INSERT INTO tasks (description, creation_date, done, task_list_id)
VALUES
("Sélectionner une destination", now(), false, 1),
("Réserver les billets d'avion", now(), false, 1),
("Réserver un hôtel", now(), false, 1),
("Faire ses valises", now(), false, 1),
("Choisir un lieu", now(), false, 2),
("Choisir une date", now(), false, 2),
("Envoyer les faire parts", now(), false, 2),
("Réserver le traiteur", now(), false, 2),
("Acheter une robe et un costume de mariés", now(), false, 2),
("Ranger les choses à leur place", now(), false, 3),
("Passer l'aspirateur", now(), false, 3),
("Passer la serpillère", now(), false, 3),
("Faire la vaisselle", now(), false, 3),
("Laver les fenêtres", now(), false, 3),
("Rassembler les ingrédients", now(), false, 4),
("Faire fondre le chocolat et le beurre", now(), false, 4),
("Ajouter le sucre", now(), false, 4),
("Ajouter la farine", now(), false, 4),
("Ajouter les oeufs", now(), false, 4),
("Mettre le mélange dans un plat", now(), false, 4),
("Mettre au four 30 minutes", now(), false, 4)
