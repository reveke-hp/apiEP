# Estrategias de Persistencia

## Para instalar correr el siguiente comando
```npm install```

## Para correr en modo local
```npm run dev```

Apuntes de clase

ORM -> hace el puente entre base de datos y objetos, permite varias bases de datos, postgress, mysql, sqlserver, oracle, mariadb.
Pad -> variable de entorno (desarrollar un poco mas que son)
Comando: npm init -> genera package.json(tiene las dependencias a usar)(ver express y nodemon instalacion y funcionamiento)
(ver comando pwd, crear carpetas, moverse en terminal linux)
Definir generate (creador)
Definir await (esperar) siempre lo acompaña async
Definir finOut(al no definir recibe todo) y findOne(recibe un objeto)

1_ Instalacion Sequelize:
Sequelize -> ORM mas dificil 
    npm i sequelize sqlite (instala)
    npm i -D sequelize-cli

sqlite es motor base de dato

2_ Crear carpeta dentro de "src" con nombre "db"

3_ Ejecutar comando luego de ejecutar e instalar el "npm i -D sequelize-cli", el cual nos habilita lo siguiente:
    npx sequelize-cli init
    Esto crea carpeta "models", "migrations", "seeders" y "config", donde dentro de esta ultima se encuentra el "config.json"
    En la parte de "development":
        Modifico -> "dialect": "sqlite", donde sqlite es la base de datos donde voy a conectarme
        Modifico -> "database": "dataStore" , es un motor de base de datos para celu (Chico)
        Modifico -> "host": "dbstore/database.sqlite", empieza desde la carpeta base.

Generar modelos:
El siguiente comando genera una clase con nombre "Alquilable" que por defecto va a extender de la clase Model:

    npx sequelize-cli model:generate --name Alquilable --attributes "descripcion:string,disponible:boolean,precio:number"

Por defecto al no poner nombre de tabla a usar, le agrega el plural el sistema("S") al nombre del modelo.
El atributo "id" lo genera el sistema automaticamente. La clase Model nos hereda createdAT y updatedAT
    ./models/alquilable.js -> si agrego esto = tablename: 'Rentable' en la seccion del .init abajo de "modelname", defino el nombre de la tabla

4_ Importo el model en app.js
    const db = require('./db/models')
    Si no aclaro el nombre del archivo, se importa lo que diga index.