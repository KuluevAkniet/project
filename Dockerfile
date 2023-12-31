FROM node:alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY  package*.json ./

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-linux-amd64-v0.6.1.tar.gz

COPY  . .

CMD ["dockerize", "-wait", "tcp://db:5432", "-timeout", "20s", "node", "dist/main"]

