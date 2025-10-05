## Manual Installation ☠️-
 - Install Nodejs Locally
 - Clone the repo 
 - Install all the dependinces (npm install)
 - Start the db locally
    - Docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres 
    - or either go to any db provider and get a db url 
 - Change the .env credentials 
 - npx prisma migrate 
 - npx prisma generate
 - npm run build && npm run start


## Docker Installation ☺️ 
 - Install docker 
 - Start Postgres 
    - Docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres 
 - Build the image `docker build -t user_project .`
 - Start the image `docker run -p 3001:3001 user_project`

## Docker Compose 🥹
 - Install Docker 
 - Run `docker compose up`
 