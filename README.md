## `Feature Breakdown`

1. **Sign up:** Users can register by creating a new account using an email address.

2. **User list:** Any visitor can see a list of all registered users.

3. **Authentication:** Registered users can sign in and sign out.

4. **Protected user profile:** Only registered users can view individual user details after signing in.

5. **Authorized user edit and delete:** Only a registered and authenticated user can edit or remove their own user account details.



## `User model`

| Field       | Type   | Description                                                                                                     |
|-------------|--------|-----------------------------------------------------------------------------------------------------------------|
| name        | String | Required field to store the user's name.                                                                         |
| email       | String | Required unique field to store the user's email and identify each account (only one account allowed per unique email). |
| password    | String | Required field for authentication. The database will store the encrypted password and not the actual string for security purposes. |
| createdDate |   Date     | Automatically generated timestamp when a new user account is created.                                            |
| updatedDate |     Date   | Automatically generated timestamp when existing user details are updated.                                       |



## `API Endpoints`

| Operation            | API Route                 | HTTP Method |
|----------------------|---------------------------|-------------|
| Create a user        | /api/users                | POST        |
| List all users       | /api/users                | GET         |
| Fetch a user         | /api/users/:userId        | GET         |
| Update a user        | /api/users/:userId        | PUT         |
| Delete a user        | /api/users/:userId        | DELETE      |
| User sign-in         | /auth/signin              | POST        |
| User sign-out        | /auth/signout (optional)  | POST        |
