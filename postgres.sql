create table users (
    id serial primary key,
    login text,
    password text,
    name text,
    surname text,
    email text,
    tel text,
    role text default 'USER'
);
create table offers (
    id serial primary key,
    id_user int,
    title text,
    address text,
    category text,
    description text,
    status text default 'Модерация'
);
create table likes (id serial primary key, id_user int, id_offer int);