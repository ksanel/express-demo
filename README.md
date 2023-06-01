# Express Restful Api Tutorial 

Express user restapi with MongoDb and JWT

## File Structure

```
|- node_modules
|- src
  |- models
  |- modules
  |- routes

```

### node_modules
This folder contains the node modules.

### src
This folder contains the application source code.
- modules : Codes with logic are found here.
- models : The codes where database operations are made are coded here.
- routes : Here are the codes that define the routing of incoming requests.

## Installation
First install the nodejs and node modules
```bash
sudo apt-get install nodejs
npm install
```

## Building Services
#### Create the mongodb atlas cluster
Go to mongodb cloud website and create new user. Then open new project and cluster for free. Copy the mongodb connection string and paste the .env file to MONGO_URL section.

#### Run the service
```bash
npm start
```

## Usage
### Endpoints
Below are all of the endpoints provided by the server, displayed by their
relative URL, and the HTTP method with which you access them.

#### Register
Register a user by sending the username, email and password to the server with the post method.
##### POST /api/v1/auth/register
Example Request:

```http
POST /api/user/ HTTP/1.1
Host: 192.168.1.2:8000
Content-Type: application/json
{
    "username": "kado",
    "email": "admin@company.com",
    "password": "secret"
}
```
Example Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "_id": "62425ba4c1186a0244754ab1",
    "username": "furki",
    "email": "furkan@kadorestapi.com",
    "isAdmin": false,
    "createdAt": "2022-03-29T01:06:44.527Z",
    "updatedAt": "2022-03-29T01:06:44.527Z",
    "__v": 0,
}
```

#### Login
Log in by submitting the correct values and use other features by entering the returned token.
##### POST /api/v1/auth/login
Example Request:

```http
POST /api/v1/auth/login HTTP/1.1
Host: 192.168.1.2:8000
Content-Type: application/json
{
    "username": "kado",
    "password": "secret"
}
```
Example Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "_id": "62425ba4c1186a0244754ab1",
    "username": "furki",
    "email": "furkan@kadorestapi.com",
    "isAdmin": false,
    "createdAt": "2022-03-29T01:06:44.527Z",
    "updatedAt": "2022-03-29T01:06:44.527Z",
    "__v": 0,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e..."
}
```

#### Get All Users
##### GET /api/v1/users
Example Request:

```http
GET /api/v1/users HTTP/1.1
Host: 192.168.1.2:8000
token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e..."
```
Example Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json
[
    {
        "_id": "62425ba4c1186a0244754ab1",
        "username": "furki",
        "email": "furkan@kadorestapi.com",
        "password": "U2FsdGVkX198x2nDXLvwnqyVf417dtBabckt5uV/bxc=",
        "isAdmin": false,
        "createdAt": "2022-03-29T01:06:44.527Z",
        "updatedAt": "2022-03-29T01:06:44.527Z",
        "__v": 0
    },
    {
        "_id": "6241db42666b98065a2e8882",
        "username": "kado",
        "email": "admin@kadorestapi.com",
        "password": "U2FsdGVkX19zCj7tZnPFCTPd6+8xDNWUXkf2sem6iM4=",
        "isAdmin": true,
        "createdAt": "2022-03-28T15:58:58.565Z",
        "updatedAt": "2022-03-29T01:10:34.365Z",
        "__v": 0
    }
]
```

#### Get User By Id
##### GET /api/v1/users/{id}
Example Request:

```http
GET /api/v1/users/6241db42666b98065a2e8882 HTTP/1.1
Host: 192.168.1.2:8000
token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e..."
```
Example Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "_id": "62425ba4c1186a0244754ab1",
    "username": "furki",
    "email": "furkan@kadorestapi.com",
    "isAdmin": false,
    "createdAt": "2022-03-29T01:06:44.527Z",
    "updatedAt": "2022-03-29T01:06:44.527Z",
    "__v": 0,
}
```

#### Delete User
##### DELETE /api/v1/users/{id}
Example Request:

```http
DELETE /api/v1/users/6241db42666b98065a2e8882 HTTP/1.1
Host: 192.168.1.2:8000
token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e..."
```
Example Response:
```http
HTTP/1.1 200 OK
"User deleted successfully"
```

#### Update User
##### PUT /api/v1/users/{id}
Example Request:

```http
PUT /api/v1/users/6241db42666b98065a2e8882 HTTP/1.1
Host: 192.168.1.2:8000
token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e..."
Content-Type: application/json
{
    "username": "kadoman"
}
```
Example Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "_id": "62425ba4c1186a0244754ab1",
    "username": "furki",
    "email": "furkan@kadorestapi.com",
    "isAdmin": false,
    "createdAt": "2022-03-29T01:06:44.527Z",
    "updatedAt": "2022-03-29T01:06:44.527Z",
    "__v": 0,
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
