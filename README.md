# Booknex

A full stack book application for managing a personal book collection. It enables the user to add, edit ,and delete books, he is also able to view his book collections in the book list tab. In addition to that, he can search for any book he wants.

## Database Schema

![Alt text](image.png)

## Installation

- Clone this repo by typing the following command in the terminal:

```sh
   git clone https://github.com/shamskhodary/Onex-Assessment.git
   cd Onex-Assessment
   npm i
   cd client
   npm i
```

- Make sure you have installed PostgreSQL and pgcli, then in the `psql` or  `pgcli` terminal
 ```sh
  CREATE DATABASE {database name};
  CREATE USER {user name} WITH superuser password {password};
  ALTER DATABASE {database name} OWNER TO {user name};
  ```
-  Build your database 
```sh
npm run build:db
```
- Create .env file and add your environment variables : 
```sh
    # database urls
    DB_URL=postgres://[username]:[password]@localhost:5432/[database]
    # secret for jwt
    SECRET_KEY=your secret key
```
- To run the server side, you can run `npm run dev` command and to run the client side `cd client & npm run dev`.

## Technologies

- Vue3.js
- Express.js
- PostgreSQL
- Sequelize
- Vuetify
- JWT
