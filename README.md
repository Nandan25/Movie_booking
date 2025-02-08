# Movie ticket booking api

Backend API's for movie ticket booking developed using Nodejs,Express & MongoDb

## Setup instructions

1.Clone the project
2.Install node dependencies with npm install
3.Add a .env file to the root folder with the mongodb configs

```
MONGODB_PASSWORD=MONGOPASSWORD
MONGO_URL="MONGODB Connection String"
```

4.Start node server

```
cd server
npm install
npm start
```

## Api end points

**1. API to create an user**

Request method: POST

Request URI: http://localhost:3000/user/register

Request body (example):

`{"name":"Tim","email":"tim@gmail.com"}`

**2. API to add a movie**

Request method: POST

Request URI: http://localhost:3000/movie/create

Request body (example):

`{"title":"Jawan","seats":50}`

**3. API to create a booking**

Request method: POST

Request URI: http://localhost:3000/movie/create

Response body (example):

`{"movie":"67a60a6df28207f606bb7b6c","user":"67a5f6383e42a1a7500ae581","date":"2025-02-07","seatNumber":6}`
