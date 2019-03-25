FROM node:lts-alpine

EXPOSE ${API_PORT} ${API_PORT}

RUN mkdir -p /home/backend
COPY package.json /home/backend
WORKDIR /home/backend
RUN npm i

COPY . /home/backend

CMD npm run start:demo
