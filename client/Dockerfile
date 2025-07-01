# 1. Gunakan image Node.js versi ringan
FROM node:20-alpine

# 2. Buat working directory dalam container
WORKDIR /app

# 3. Salin dependency list dan install
COPY package*.json ./
RUN npm install

# 4. Salin semua file project ke container
COPY . .

# 5. Build project React jadi production static files
RUN npm run build

# 6. Install server static file (serve)
RUN npm install -g serve

# 7. Jalankan app static pada port 3000
CMD ["serve", "-s", "build", "-l", "3000"]
