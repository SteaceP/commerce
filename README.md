![Published](https://github.com/SteaceP/commerce/workflows/CI/CD/badge.svg)

# E-Commerce made with React.js and Firebase

---
## [Live on Heroku](https://steace-blog-live.herokuapp.com/)

# **DOCKER**

## Development

---

### Build

`docker build -t steace:commerce-cra-dev .`
`

### Run

docker run \
-it \
--rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
steace:commerce-cra-dev
`

---

## Production (not tested)

---

### Build

`docker build -f Dockerfile.prod -t steace:commerce-cra-prod .`

### Run

`docker run -it --rm -p 1337:80 steace:commerce-cra-prod`

## Docker Compose

---

`docker-compose up -d --build`
`docker-compose stop`
