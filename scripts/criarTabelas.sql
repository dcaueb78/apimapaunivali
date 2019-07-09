create table usuarios (
	id serial,
	email varchar(255) not null,
	login varchar(255) not null,
	nome varchar(255) not null,
	senha varchar(255) not null
);

create table localizacaos (
	id serial,
	nome varchar(255) not null,
	latitude float not null,
	longitude float not null,
	tipo varchar(255) not null
);

insert into localizacaos (nome, latitude, longitude, tipo)
	values ('Dusk', 19223981.5,-122122.2,'Lanchonete');
	
select * from localizacaos