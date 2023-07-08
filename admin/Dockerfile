# Dockerfile trong thư mục admin
FROM node:14
WORKDIR /app/admin
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]