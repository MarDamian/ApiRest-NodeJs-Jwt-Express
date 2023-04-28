
DROP TABLE IF EXISTS Estudiante;

CREATE TABLE Estudiante (
idEst  SERIAL PRIMARY KEY,
nomEst VARCHAR( 30 ) NOT NULL ,
nomProg VARCHAR( 50 ) NOT NULL ,
sexEst CHAR( 1 ) NOT NULL CHECK (sexEst IN ('F', 'M') ),
cal FLOAT NOT NULL
);


INSERT INTO Estudiante ( nomEst, sexEst, nomProg,  cal)
VALUES
( 'María Rojas', 'F', 'Filosofia', 3.0),
( 'Luis Pérez', 'M', 'Musica', 4.3),
( 'Rosa Angulo', 'F', 'Derecho', 3.8),
( 'Darío Casas', 'M', 'Artes Visulaes', 4.5),
( 'Carla López', 'F', 'Medicina Veterinaria', 4.0),
('Carlos Rozo', 'M', 'Ingeneria Agronomica', 3.8) ,
( 'Melissa Roa', 'F', 'Zootecnia', 4.2),
( 'Joaquín Rosas', 'M', 'Biologia', 4.0),
( 'Mario Llano', 'M', 'Fisica', 2.5),
( 'Elisa Rojas', 'F', 'Geologia', 3.8),
('Iván Duarte', 'M', 'Matematica Aplicada', 2.8),
( 'Irene Díaz', 'F', 'Microbilogia', 3.2),
( 'Abel Gómez', 'M', 'Qumica', 3.8),
( 'José Giraldo', 'M', 'Administracion de Empresas', 3.5),
( 'William Daza', 'M', 'Contaduria Publica', 3.9),
( 'Diana Solarte', 'F', 'Economia', 4.0),
( 'Marcos Cortez', 'M', 'Licenciatura en lenguas', 3.6),
( 'Antonio Gil', 'M', 'Licenciatura en Educaion Infatil', 4.8),
( 'Marisol Pulido','F', 'Lengua Castellana y comunicacion', 4.5),
( 'Ana Moreno', 'F', 'Ingeniería Electrónica',3.5),
( 'Pedro Blanco', 'M', 'Ingeniería de Sitemas', 3.2),
( 'Jesús Alfonso', 'M', 'Ingeniería Mecatronica', 3.3),
( 'Carolina Ríos', 'F', 'Ingeniería Ambiental',4.2),
( 'Edith Muñoz', 'F', 'Fisioterapia', 5.0),
( 'Julián Mora', 'M', 'Medicina', 2.7),
( 'Manuel Millán', 'M', 'Psicologia', 4.3);

select * from Estudiante;
select * from Facultad;
