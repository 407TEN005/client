FROM node:20.11.0-alpine as build

WORKDIR /

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

RUN yarn install

COPY . .

ARG VITE_KAKAO_LOGIN_URL
ARG VITE_KAKAO_REDIRECT_URL
ARG VITE_HOME_URL

ENV VITE_KAKAO_LOGIN_URL=$VITE_KAKAO_LOGIN_URL
ENV VITE_KAKAO_REDIRECT_URL=$VITE_KAKAO_REDIRECT_URL
ENV VITE_HOME_URL=$VITE_HOME_URL

RUN yarn build

FROM nginx:1.23.2-alpine as start

COPY --from=build ./dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]