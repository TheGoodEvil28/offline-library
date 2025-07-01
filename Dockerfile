# Stage 1: Build React frontend
FROM node:20-alpine AS build-frontend
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Build backend and include frontend
FROM node:20-alpine
WORKDIR /app
COPY server/package*.json ./server/
RUN npm install --prefix server
COPY server ./server

# Copy built frontend into Express public folder
COPY --from=build-frontend /app/client/build ./server/public

WORKDIR /app/server
EXPOSE 5000
CMD ["node", "index.js"]
