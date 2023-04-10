
# Compass

Compass is a self-coaching application designed to empower users in taking charge of their mental health. By tracking and visualizing emotional states, Compass reveals patterns in mental and physical well-being, and provides actionable recommendations for improved self-awareness. The mission is to help people better understand and orient themselves on a personal level by quantifying and visualizing their emotions through journaling. 


## Getting started

Clone the project

```bash
  git clone git@github.com:Isi-Te/compass-frontend.git
  git clone git@github.com:Isi-Te/compass-backend.git
```

Go to the project directory

```bash
  cd frontend-client
  cd backend-server
```

Install dependencies

```bash
  npm install
```

Start project (client)

```bash
  npm start
```
Start project (server)
```bash
  npm run dev
```


## Installation

Required npm packages

```bash
  npm install axios
  npm install chart.js
  npm install dotenv
  npm install react-chartjs-2
  npm install react-router-dom
  npm install sass

  npm install bcrypt
  npm install cors
  npm install dotenv
  npm install jasonwebtoken
  npm install knex
  npm install uuid
  npm install --save-dev nodemon
```
    

## API Reference

#### Get graph-data

```http
  GET /api/journal-entry
```

Response body example:

[
    {
    "id": "11",
    "date": "2023-03-30T23:00:01.000Z",
    "user_id": 1,
    "happy": 4,
    "sad": 8,
    "frustrated": 8,
    "stress": 8,
    "sleep": 3,
    "nutrition": 5,
    "fitness": 4,
    "social": 4,
    "qualitytime": 3,
    "highlight": "family time",
    "lowlight": "time pressure"
    }
]

#### Post graph-data

```http
  POST /api/journal-entry
```
Post body example:

[
    {
    "happy": 4,
    "sad": 8,
    "frustrated": 8,
    "stress": 8,
    "sleep": 3,
    "nutrition": 5,
    "fitness": 4,
    "social": 4,
    "qualitytime": 3,
    "highlight": "family time",
    "lowlight": "time pressure"
    }
]

## Knex.js & MySQL
`seed_data` is included in this repo to get you started with Knex.js migrations and seeds. To seed your database run the command line `$knex seed:run`.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` `CORS_ORIGIN` `REACT_APP_SERVER_URL` 

`JWT_SECRET`


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Cyan | ![#006969](https://via.placeholder.com/10/006969?text=+) #006969 |
| Turquoise | ![#6FBBB1](https://via.placeholder.com/10/6FBBB1?text=+) #6FBBB1 |
| White | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Dark Grey| ![#26262C](https://via.placeholder.com/10/26262C?text=+) #26262C |
| Ligtht Grey| ![#D1D0D0](https://via.placeholder.com/10/D1D0D0?text=+) #D1D0D0 |


## Roadmap

- Add more integrations:
  1. Integrate fitness app API: Automate the upload for fitness, sleep and energy level to simplify the journaling experience.
  2. Personalized journaling experience: the user can activate and deactivate what they want to track in their journaling experience.
  3. Image upload: Upload daily highlight in from of a photo and create a memory board.
  4. Nutrition/macro tracker: Add nutritional facts to better understand the connection between mind and body.
  5. Pattern recognition and analysis: Utilize AI algorithms to recognize patterns in users' mental and physical well-being and correlate findings to provide comprehensive insights.

## Built with

**Client:** `React` `SASS` `JavaScript` `Chartjs`

**Server:** `Node` `Express` `Knex`

## Authors

- [@Isi-Te](https://github.com/Isi-Te)

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/iteuber/)