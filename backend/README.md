# HomeCare Backend API

> Base URL: `http://localhost:3000/api/v1`

---

## Data Store Model

### User Model

| Field         | Type    | Description                                 |
| :------------ | :------ | :------------------------------------------ |
| name          | String  | Full name of the user                       |
| email         | String  | Unique email address                        |
| password      | String  | Hashed password (hidden in responses)       |
| authProviders | String  | `"password"` \| `"google"`                  |
| googleId      | String  | Google OAuth ID (hidden in responses)       |
| emailVerified | Boolean | Whether the email has been verified         |
| phone         | String  | Phone number                                |
| phoneVerified | Boolean | Whether the phone has been verified         |
| role          | String  | `"patient"` \| `"nurse"` \| `"admin"`       |
| accountStatus | String  | `"active"` \| `"suspended"` \| `"disabled"` |
| profileStatus | String  | `"incomplete"` \| `"complete"`              |
| lastLoginAt   | Date    | Timestamp of last login                     |

---

## API Routes

### 🔐 Auth Routes — `/api/v1/auth`

---

### 1. Register User

**`POST`** `/api/v1/auth/register`

Registers a new user and sends a 6-digit OTP to their email for verification.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "role": "patient"
}
```

| Field    | Type   | Required | Notes                               |
| :------- | :----- | :------- | :---------------------------------- |
| name     | String | ✅       | Min 3 characters, max 30 characters |
| email    | String | ✅       | Must be a valid email               |
| password | String | ✅       | Min 6 characters                    |
| role     | String | ✅       | One of `patient`, `nurse`, `admin`  |

**Success Response `201`:**

```json
{
  "statusCode": 201,
  "data": {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "patient",
    "authProviders": "password",
    "emailVerified": false,
    "phone": null,
    "phoneVerified": false,
    "accountStatus": "active",
    "profileStatus": "incomplete",
    "lastLoginAt": null,
    "createdAt": "2026-10-29T09:36:00.000Z",
    "updatedAt": "2026-10-29T09:36:00.000Z"
  },
  "message": "User registered successfully. Please verify the OTP sent to your email"
}
```

**Error Responses:**

| Status | Message                                |
| :----- | :------------------------------------- |
| `400`  | All fields are required                |
| `400`  | Invalid email address                  |
| `400`  | Invalid role                           |
| `400`  | User with this email already exists    |
| `500`  | Something went wrong while registering |

---

### 2. Login User

**`POST`** `/api/v1/auth/login`

Authenticates the user with email and password. Returns a JWT token (also set as an HTTP-only cookie).

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

| Field    | Type   | Required |
| :------- | :----- | :------- |
| email    | String | ✅       |
| password | String | ✅       |

**Success Response `200`:**

```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "patient",
      "authProviders": "password",
      "emailVerified": true,
      "phone": null,
      "phoneVerified": false,
      "accountStatus": "active",
      "profileStatus": "incomplete",
      "lastLoginAt": "2026-10-29T09:40:00.000Z",
      "createdAt": "2026-10-29T09:36:00.000Z",
      "updatedAt": "2026-10-29T09:40:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Login successful"
}
```

> A `token` cookie (`httpOnly`, `secure` in production) is also set automatically.

**Error Responses:**

| Status | Message                                                      |
| :----- | :----------------------------------------------------------- |
| `400`  | Email and password are required                              |
| `401`  | Invalid email or password                                    |
| `403`  | Account is not active                                        |
| `403`  | Email is not verified. A new OTP has been sent to your email |

---

### 3. Verify OTP (Email Verification)

**`POST`** `/api/v1/auth/verify-otp`

Verifies the 6-digit OTP sent to the user's email during registration. Returns a JWT token upon success.

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "otp": "482931"
}
```

| Field | Type   | Required | Notes                    |
| :---- | :----- | :------- | :----------------------- |
| email | String | ✅       | Registered email address |
| otp   | String | ✅       | 6-digit OTP from email   |

**Success Response `200`:**

```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "patient",
      "emailVerified": true,
      "accountStatus": "active",
      "profileStatus": "incomplete",
      "lastLoginAt": null,
      "createdAt": "2026-10-29T09:36:00.000Z",
      "updatedAt": "2026-10-29T09:38:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Email verified successfully"
}
```

**Error Responses:**

| Status | Message                    |
| :----- | :------------------------- |
| `400`  | Email and OTP are required |
| `400`  | Invalid or expired OTP     |
| `400`  | Email is already verified  |
| `404`  | User not found             |

---

### 4. Resend OTP

**`POST`** `/api/v1/auth/resend-otp`

Resends a fresh OTP to the user's email. The previous unused OTP is invalidated.

**Request Body:**

```json
{
  "email": "john.doe@example.com"
}
```

| Field | Type   | Required |
| :---- | :----- | :------- |
| email | String | ✅       |

**Success Response `200`:**

```json
{
  "statusCode": 200,
  "data": null,
  "message": "OTP sent to your email"
}
```

**Error Responses:**

| Status | Message                   |
| :----- | :------------------------ |
| `400`  | Email is required         |
| `400`  | Email is already verified |
| `404`  | User not found            |

---

### 5. Forgot Password

**`POST`** `/api/v1/auth/forgot-password`

Sends a password reset OTP to the user's email. For security, always returns a success message regardless of whether the email exists.

**Request Body:**

```json
{
  "email": "john.doe@example.com"
}
```

| Field | Type   | Required |
| :---- | :----- | :------- |
| email | String | ✅       |

**Success Response `200`:**

```json
{
  "statusCode": 200,
  "data": null,
  "message": "If an account exists for this email, an OTP has been sent"
}
```

**Error Responses:**

| Status | Message           |
| :----- | :---------------- |
| `400`  | Email is required |

---

### 6. Reset Password

**`POST`** `/api/v1/auth/reset-password`

Resets the user's password using the OTP received via email after calling Forgot Password.

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "otp": "748201",
  "newPassword": "newSecurePass456"
}
```

| Field       | Type   | Required | Notes                  |
| :---------- | :----- | :------- | :--------------------- |
| email       | String | ✅       | Registered email       |
| otp         | String | ✅       | 6-digit OTP from email |
| newPassword | String | ✅       | Min 6 characters       |

**Success Response `200`:**

```json
{
  "statusCode": 200,
  "data": null,
  "message": "Password reset successfully"
}
```

**Error Responses:**

| Status | Message                                  |
| :----- | :--------------------------------------- |
| `400`  | Email, OTP and new password are required |
| `400`  | Password must be at least 6 characters   |
| `400`  | Invalid or expired OTP                   |

---

## Route Summary

| Method | Endpoint                       | Description                 | Auth Required |
| :----- | :----------------------------- | :-------------------------- | :------------ |
| `GET`  | `/`                            | Health check                | ❌            |
| `POST` | `/api/v1/auth/register`        | Register a new user         | ❌            |
| `POST` | `/api/v1/auth/login`           | Login with email & password | ❌            |
| `POST` | `/api/v1/auth/verify-otp`      | Verify email with OTP       | ❌            |
| `POST` | `/api/v1/auth/resend-otp`      | Resend verification OTP     | ❌            |
| `POST` | `/api/v1/auth/forgot-password` | Request password reset OTP  | ❌            |
| `POST` | `/api/v1/auth/reset-password`  | Reset password using OTP    | ❌            |
