create table usuarios (
	id serial,
	email varchar(255),
	login varchar(255),
	nome varchar(255),
	senha varchar(255)
)

create table localizacaos (
	id serial,
	nome varchar(255) not null,
	latitude real not null,
	longitude real not null,
	tipo varchar(255) not null
)
