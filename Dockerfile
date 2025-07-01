# Build frontend
FROM node:20-alpine as build-frontend
WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install
RUN npm run build

# Build backend
FROM node:20-alpine as backend
WORKDIR /app
COPY server ./server
WORKDIR /app/server
COPY --from=build-frontend /app/client/build ./public
RUN npm install
CMD ["node", "index.js"]
EXPOSE 5000
