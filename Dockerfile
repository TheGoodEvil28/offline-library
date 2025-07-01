# Build React
FROM node:20-alpine as build-frontend
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Build backend + serve React
FROM node:20-alpine
WORKDIR /app
COPY server/package*.json ./server/
RUN npm install --prefix server
COPY server ./server
COPY --from=build-frontend /app/client/build ./server/public

WORKDIR /app/server
EXPOSE 5000
CMD ["node", "index.js"]
