FROM node:alpine
RUN apk update
ENV TZ=America/Santiago
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3001
ENTRYPOINT ["npm", "run", "dev"]