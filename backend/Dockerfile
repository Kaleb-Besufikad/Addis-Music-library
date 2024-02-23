FROM node:18.16-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]