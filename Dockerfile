FROM node:14.19 as build

WORKDIR /app

COPY ./ /app/

RUN npm install

RUN npm run build

FROM nginx:1.21.4-alpine

COPY --from=build /app/dist/miaprova-test /usr/share/nginx/html

COPY ./app.conf /etc/nginx/conf.d/default.conf
