FROM node:alpine

RUN mkdir /app
ADD package.json app/package.json
WORKDIR /app
RUN yarn
ADD . /app

EXPOSE 3000

CMD ["yarn", "run", "dev"]
