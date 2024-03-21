FROM node:alpine

# Устанавливаем зависимости
RUN apk add --no-cache curl

WORKDIR /usr/src/

EXPOSE 3000

# Копируем файлы package.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Скачиваем и устанавливаем dockerize
RUN curl -L https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar xz -C /usr/local/bin

# Копируем все остальные файлы проекта
COPY . .

# Ожидаем доступность базы данных
CMD [ "node", "dist/main" ]



