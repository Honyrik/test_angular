# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table global_wlpparam (
  id                            bigserial not null,
  name                          varchar(255) not null,
  param                         varchar(2048),
  constraint pk_global_wlpparam primary key (id)
);


# --- !Downs

drop table if exists global_wlpparam cascade;

