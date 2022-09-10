create database dbGit;

create table users (
	id serial not null PRIMARY KEY
	, name varchar(50) not NULL
	, email varchar(50)
	, location varchar(100)
	, bio text
	, repos_url text
);
