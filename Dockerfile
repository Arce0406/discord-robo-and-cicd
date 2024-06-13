# Use nodejs slim version for minify
FROM node:20-slim AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start"]