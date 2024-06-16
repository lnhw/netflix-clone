#Stage 1 : build stage
FROM node:alpine AS builder

# thiết lập thư mục worker
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install
#Copy source code

COPY . .

#COPY source code vào file .env
COPY .env .env
# #load environment variable from .env file
# RUN export $(grep -v '^#' .env | axrgs)

# build app
RUN npm run build

# Mở port 3000
EXPOSE 3000

# Định nghĩa lệnh để chạy khi container khởi động
CMD ["npm", "start"]