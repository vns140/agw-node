FROM node:alpine
WORKDIR /usr/src/app
ENV PORT=8080
EXPOSE 8080
COPY . .
RUN yarn install --production
CMD [ "yarn", "start" ]
