# Hangry Backend

## How to Run Locally

- Make sure to have Node and NPM installed.
- Run `npm install`.
- If you want to run in development mode use `npm run dev`.
- Else, run `npm run build` then `npm run prod`.

## Endpoints

### <span style="color: green;">GET</span> /user

Get All User

### <span style="color: green;">GET</span> /user/:id

Get User By Id

### <span style="color: yellow;">POST</span> /user

Request body:

```json
Content-Type: application/json

{
  "name": "FirstLander",
  "email": "firstlander@gmailcom",
  "dateOfBirth": "2023-12-27T14:45:59.257Z"
}
```

Create User

### <span style="color: blue;">PUT</span> /user

Request body:

```json
Content-Type: application/json

{
  "name": "UpdateFirstLander",
  "email": "Updatefirstlander@gmailcom",
  "dateOfBirth": "2023-12-27T14:45:59.257Z"
}
```

Update User

### <span style="color: red;">DEL</span> /user/:id

Delete User By Id

<br />

The postman is available and ready to be imported

## Notes

- I omit the Id with the assumption that it is auto generated like in most cases.
