FROM node as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/fresh-app/broswer /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g" " daemon off;"]