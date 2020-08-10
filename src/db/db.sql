CREATE DATABASE IF NOT EXISTS whatsup
DEFAULT COLLATE utf8_general_ci
DEFAULT CHARACTER SET utf8;

USE whatsup;



CREATE TABLE IF NOT EXISTS message (

id int not null auto_increment,
author varchar(30) not null,
message text not null,
primary key(id)

) DEFAULT CHARSET = utf8;
