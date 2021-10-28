FROM node:14-alpine

EXPOSE 3000
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --no-optional --only=prod

COPY .next .next
COPY public public
COPY next.config.js next-i18next.config.js ./

CMD [ "npx", "next", "start", "-H", "0.0.0.0" ]
