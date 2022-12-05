create database recipes;

use recipes;

create table usuario(
	id int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    data_nascimento date,
    fk_address int,
    foreign key (fk_address) references endereco(id)
);

create table endereco(
	id int primary key auto_increment,
    logradouro varchar(45),
    numero varchar(45),
    cep varchar(45),
    cidade varchar(45),
    estado varchar(45),
    pais varchar(45)
);

create table receita(
	id int primary key auto_increment,
    nome varchar(45),
    tempo int,
    porcoes int,
    ingredientes text,
    modo_preparo text,
    fk_usuario int,
    foreign key (fk_usuario) references usuario(id)
);

create table receita_categoria(
	fk_receita int,
    fk_categoria int,
    foreign key (fk_receita) references receita(id),
    foreign key (fk_categoria) references categoria(id)
);

create table categoria(
	id int primary key auto_increment,
    nome varchar(45)
);

create table usuario_favoritos(
	fk_usuario int,
    fk_favoritos int,
    foreign key (fk_usuario) references usuario(id),
    foreign key (fk_favoritos) references favoritos(id)
);

create table favoritos(
	id int primary key auto_increment,
    fk_receita int,
    foreign key (fk_receita) references receita(id)
);

show tables;

desc usuario;