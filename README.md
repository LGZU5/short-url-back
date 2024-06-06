
# SHORTENER URL

A modern URL shortener with an intuitive user interface that allows users to generate, manage, and share short links efficiently. Built with Node.js and Express, this backend project demonstrates the use of a simple api


## Run Locally

Clone the project

```bash
  git clone https://github.com/LGZU5/short-url-back.git
```

Go to the project directory

```bash
  cd short-url-back
```

Install dependencies

```bash
  npm install
  or
  yarn install
```

Start the server

```bash
  npm run dev
```


## API Reference

#### Short a url

```http
  POST /short-url
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. The url you want to shorten  |

#### Redirects to the original URL

```http
  GET /:url
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `string` | **Required**. Return a redirection to the original URL |


Takes two numbers and returns the sum.

## Tech Stack

- 🚀 express 4.19.0
- 💣 Node.js 18.17.0
