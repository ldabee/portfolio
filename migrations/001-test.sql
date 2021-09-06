-- UP
CREATE TABLE [user]
(
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT
);

INSERT INTO [user]
  (name,email)
VALUES
  ('Lionel', 'ld@gmail.com');

-- Down
DROP TABLE [user]