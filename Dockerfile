FROM node:latest

WORKDIR /usr/src/App

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3450

CMD ["npm","run","dev"]
