create table student( id IDENTITY(1, 1) primary key not null, name varchar(60) not null, controlNumber varchar(8) not null, career varchar(35) not null, semester int not null, grades json not null)

insert into student (name, controlNumber, career, semester, grades)
values ('Oscar Oswaldo Meza Leon', '18171427', 'Ingeniería en Sistemas Computacionales', 5, '{ "grades": ["[70,95,89,94,89,70]","[70,95,89,94,89,70]","[99,95,79,84,73,80]","[83,92,90,81,80,91]","[85,84,91,88,70,72]","[97,80,73,88,73,0]"]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Jorge Paul Burgueno', '18172754', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":["[0,97,81,74,79,99]","[72,98,0,70,81,76]","[96,71,0,91,78,100]","[72,0,82,98,89,88]","[92,86,87,85,85,77]"]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Diane Reyes Varce', '18174124', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":[ "[80,78,0,96,75,81]","[0,74,82,82,98,100]","[74,72,97,0,90,97]","[76,78,77,83,84,79]","[87,75,91,90,94,78]" ]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Laura Verse Concepcion', '18179845', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":[ "[73,0,87,80,98,85]","[93,87,70,75,94,95]","[89,0,71,100,91,75]","[100,93,71,73,86,96]","[89,94,85,71,0,86]" ]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Carlos Cafe Reza', '18179042', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":[ "[98,100,89,85,78,93]","[0,81,71,82,100,89]","[71,70,75,99,91,99]","[73,81,96,83,100,93]","[72,91,94,83,80,71]" ]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Jose Manuel Sainz', '18178943', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":[ "[76,99,0,80,79,78]","[73,72,96,71,79,83]","[0,84,88,90,93,87]","[93,77,99,91,79,82]","[79,79,87,88,0,94]" ]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Mario Torrez Uke', '18174209', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":[ "[77,93,78,99,75,97]","[88,92,71,74,74,74]","[98,0,82,97,0,90]","[99,0,92,74,95,97]","[81,75,84,93,0,94]" ]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Juan Pablo Gomez', '18174567', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":[ "[74,76,92,84,0,99]","[88,0,88,98,100,91]","[84,70,71,91,98,80]","[93,76,92,93,80,84]","[79,94,84,70,76,98]" ]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Ana Segunda Chiquete', '18172398', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":[ "[82,99,0,75,73,95]","[71,78,76,0,100,90]","[95,81,76,87,0,90]","[72,70,0,0,97,87]","[71,83,70,89,99,82]" ]}')

insert into student (name, controlNumber, career, semester, grades)
values ('Ana Segunda Chiquete', '18176557', 'Ingeniería en Sistemas Computacionales', 5, '{"grades":[ "[72,76,91,81,73,87]","[77,89,92,91,79,71]","[89,95,74,87,83,76]","[78,87,78,86,84,71]","[90,87,79,83,83,80]"]}')