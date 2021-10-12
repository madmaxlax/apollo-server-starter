FROM node:lts-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY yarn.lock ./
RUN yarn

COPY . ./
RUN CI=true yarn test || echo "There were failing tests!"

CMD ["yarn", "start:dev"]

