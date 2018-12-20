DROP DATABASE IF EXISTS food_db;
CREATE DATABASE food_db;
\c food_db

-- add create tables here

CREATE TABLE food(
  id serial primary key,
  name VARCHAR,
  img_url VARCHAR
);

CREATE TABLE users(
  id serial primary key,
  Name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  image VARCHAR,
  foods_id int not null,
  foreign key(foods_id) references food
);


-- CREATE TABLE users(
-- user VARCHAR;

-- );


INSERT INTO food
  (name, img_url)
VALUES
  ('Indian Food', 'https://tce-live2.s3.amazonaws.com/media/media/76374c18-1a40-49ff-938a-c8dab85dacec.jpg'),
  ('Arabic Food', 'http://www.rougemagz.com/wp-content/uploads/2014/09/dish11-1200x520.jpg'),
  ('Japanese Food', 'https://static1.squarespace.com/static/53fa1ea8e4b0431f9857e8ef/t/5907f9e6ebbd1ad192da41cc/1493694973049/1526815_615516941831002_1345343333_n.jpg'),
  ('Vegetarian food', 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/goa-vegetarian-cafe.jpg'),
  ('Italian food', 'https://blog.kesari.in/wp-content/uploads/2017/11/PizzaMargherita-Kesari-Tours.jpg'),
  ('Amircan Food', 'http://ghk.h-cdn.co/assets/cm/15/11/54ffec52236b6-cheeseburger-lgn.jpg');


INSERT INTO users
 (Name, email, password, image, foods_id)

VALUES
('Ahmed','grdfgr','rerrrt', 'https://kpms-pr.eu/wp-content/uploads/2013/10/unknown-person.png', 2),
('Ali','Ali@Ali.Ali','rertdd', 'https://kpms-pr.eu/wp-content/uploads/2013/10/unknown-person.png', 1),
('khalid','khalid@khalid.khalid','raert', 'https://image.shutterstock.com/z/stock-photo-hungry-man-eating-a-tasty-pizza-28412743.jpg', 5),
('John','John@John.John','rexxrt', 'https://kpms-pr.eu/wp-content/uploads/2013/10/unknown-person.png', 1),
('Andrea','Andrea@Andrea.Andrea','refgrt', 'https://kpms-pr.eu/wp-content/uploads/2013/10/unknown-person.png', 4),
('James','James@James.James','rccfert', 'https://cdn-b.medlife.com/2018/01/a-fat-man.png', 6),
('Jack','JJack@Jack.Jack','rccsefert', 'https://c8.alamy.com/comp/B0X2J1/stereotypical-italian-man-eating-pizza-and-gesturing-with-hand-B0X2J1.jpg', 5),
('Daniel','Daniel@Daniel.Daniel','rccsrmfert', 'https://kpms-pr.eu/wp-content/uploads/2013/10/unknown-person.png', 2),
('David','David@David.David','rccfert', 'https://kpms-pr.eu/wp-content/uploads/2013/10/unknown-person.png', 3),
('Khomar','Khomar@Khomar.Khomar','rccbfert', 'https://st.depositphotos.com/2437697/2763/i/950/depositphotos_27638603-stock-photo-wierd-and-hungry-man.jpg', 5),
('Mohammed','Mohammed@Mohammed.Mohammed','rccmnfert', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2lqtnQLkcgrCYVjUF7bM73wRhw3jeL_LMmGJf5LXqxkHjb5c', 4),
('Abdullah','Abdullah@Abdullah.Abdullah','rccfert', 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX17243578.jpg', 2),
('Smith','Smith@Smith.Smith','rccwufert', 'https://kpms-pr.eu/wp-content/uploads/2013/10/unknown-person.png', 1),
('Saleh','Saleh@Saleh.Saleh', 'tmeosrjhe' ,'https://kpms-pr.eu/wp-content/uploads/2013/10/unknown-person.png' , 3);