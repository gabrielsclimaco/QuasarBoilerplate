FROM node:alpine

RUN mkdir /app
ADD package.json app/package.json
WORKDIR /app
RUN yarn global add quasar-cli && yarn
ADD . /app

EXPOSE 8080

CMD ["quasar", "dev"]

