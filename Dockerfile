#Stage 1 : build stage
FROM node:lts-alpine AS builder

# thiết lập thư mục worker
WORKDIR /app

# install dependencies
COPY package*.json ./

#Copy source code

COPY . .

# Thiết lập các biến môi trường từ build args
ARG NEXT_PUBLIC_API_KEY
ARG NEXT_PUBLIC_TMDB_URL
ARG NEXT_PUBLIC_TMDB_URL_IMAGE
ARG NEXT_PUBLIC_URL
ARG NEXTAUTH_SECRET
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG GITHUB_ID
ARG GITHUB_SECRET
ARG EMAIL_SERVER
ARG EMAIL_FROM
ARG NEXT_SHARP_PATH

ENV NEXT_PUBLIC_API_KEY=$NEXT_PUBLIC_API_KEY
ENV NEXT_PUBLIC_TMDB_URL=$NEXT_PUBLIC_TMDB_URL
ENV NEXT_PUBLIC_TMDB_URL_IMAGE=$NEXT_PUBLIC_TMDB_URL_IMAGE
ENV NEXT_PUBLIC_URL=$NEXT_PUBLIC_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET
ENV GITHUB_ID=$GITHUB_ID
ENV GITHUB_SECRET=$GITHUB_SECRET
ENV NEXT_SHARP_PATH=$NEXT_SHARP_PATH

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