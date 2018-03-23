# node-api
This is a starter template for api node projects.

## How to use this template

Required:

* nodejs
* mySQL


```bash
$ cd node-api
$ npm install
$ npm start
```

Run migrate `sequelize`:

```bash
$ ./node_modules/.bin/sequelize db:migrate
$ ./node_modules/.bin/sequelize db:migrate:undo #rollback
$ ./node_modules/.bin/sequelize db:seed #run seeders
```

start server [http://localhost:3000/api](http://localhost:3000/api) :-)
