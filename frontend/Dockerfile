FROM node:18.16-alpine

WORKDIR /app

COPY src/ ./src
COPY public/ ./public
COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
