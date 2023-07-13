-- Insert departments
INSERT INTO department (name) VALUES
  ('Marketing'),
  ('Sales'),
  ('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
  ('Marketing Manager', 60000, 1),
  ('Sales Representative', 50000, 2),
  ('Finance Analyst', 55000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Mike', 'Johnson', 3, 1),
  ('Emily', 'Wilson', 2, 1),
  ('David', 'Brown', 2, 1),
  ('Sarah', 'Davis', 3, 1),
  ('Michael', 'Lee', 2, 1),
  ('Jennifer', 'Taylor', 2, 1),
  ('Christopher', 'Clark', 3, 1),
  ('Amanda', 'Anderson', 2, 1);
