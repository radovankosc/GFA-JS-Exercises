CREATE DATABASE IF NOT EXISTS to_do_app;
USE to_do_app;

CREATE TABLE IF NOT EXISTS stages(
id INT AUTO_INCREMENT UNIQUE NOT NULL,
stage_name VARCHAR(6),
PRIMARY KEY (id)
);

INSERT INTO stages(stage_name) VALUES 
("Todo"),
("Doing"),
("Review"),
("Done");

CREATE TABLE IF NOT EXISTS todo_list (
  id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
  task_name TEXT NOT NULL,
  create_date DATETIME DEFAULT NOW(),
  stage_id INT DEFAULT 1,
  FOREIGN KEY (stage_id) REFERENCES stages(id)
);
-- DROP TABLE todo_list;

-- CRUID

-- CREATE
-- inserting new task with different stage

INSERT INTO todo_list (task_name, stage_id)
VALUES
('Buy milk',1),
('Water the plants',2),
('Finish the youtube video', 2),
('Do the homework', 3),
('Go for a pint of beer', 4);

-- READ
SELECT todo_list.id, create_date, stage_id FROM todo_list
JOIN stages
ON todo_list.stage_id = stages.id
WHERE todo_list.stage_id = 2 OR todo_list.stage_id = 3 ;

-- UPDATE
UPDATE todo_list
SET stage_id = 20
WHERE id = 3;

-- DELETE
DELETE FROM todo_list
WHERE id = 1;

-- Final result
SELECT todo_list.id, task_name, create_date, stage_name FROM todo_list
JOIN stages ON todo_list.id = stages.id