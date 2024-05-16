#Stage 1 : build stage
FROM node:lts-alpine AS builder

# thiết lập thư mục worker
WORKDIR /app

# install dependencies
COPY package* .json ./

#Copy source code

COPY . .

# build app
RUN npm run build

#stage 2 : run stage

FROM node:lts-alpine

WORKDIR /app

# Copy từ builder
COPY --from=builder /app/next.config.js .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Mở port 3000
EXPOSE 3000

# Định nghĩa lệnh để chạy khi container khởi động
CMD ["npm", "start"]