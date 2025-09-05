# nestjs_angular_mysqldb_anime90_learning
Project to learn about NestJs as backend, angular as frontend with a DB on MySQL with 90's anime info

# project structure
> create a folder for the app and join
> install nest client
>> ``` npm install -g @nestjs/cli @angular/cli ```

> create Backend structure
>> ``` nest new backend ```
>> Choose the package admin [npm, yarn, pnpm]
>> join the backend folder and install dependencies
>> ``` npm install @nestjs/sequelize sequelize sequelize-typescript mysql2 ```
>> eliminar autocreación de git
>> ``` rm -rf .git || rm .gitignore ```
>> go to project root

> create a Frontend structure
>> ``` ng new frontend --routing --style=css ```
>> pulse Enter in every question

> create a db folder with a SQL file
>> ``` mkdir db || cd db || touch init.sql ```

# backend folders
> crear carpeta de cada sección
>> definir 4 archivos para cada sección
>>> seccion.model.ts
>>> seccion.controller.ts
>>> seccion.module.ts
>>> seccion.service.ts