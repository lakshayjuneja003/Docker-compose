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
 - Start a network `docker network create my_network`
 - Start Postgres 
    - `Docker run --network my_network --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres `
 - Build the image `docker build --network=host -t user_project .`
 - Start the image `docker run -e DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgres"  --network my_network -p 3001:3001 user_project`

## Docker Compose 🥹
 - Install Docker 
 - Run `docker compose up`