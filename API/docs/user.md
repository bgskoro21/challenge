# User API Spec

## Register User API

Endpoint : POST /api/user/register

Request Body :

```json
{
  "username": "bgskoro21",
  "password": "rahasia",
  "name": "Bagaskara Dwiputra"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "bgskoro21",
    "name": "Bagaskara Dwiputra"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username has been registered"
}
```

## Login User API

Endpoint : POST /api/user/login

Request Body :

```json
{
  "username": "bgskoro21",
  "password": "rahasia"
}
```

Response Body Success :

```json
{
  "data": {
    "accessToken": "unique-token",
    "refreshToken": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password wrong"
}
```
