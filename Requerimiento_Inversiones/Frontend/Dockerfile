# Etapa 1: Build Angular
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Servir con Nginx
FROM nginx:1.25
COPY --from=build /app/dist/proyecto-minsait/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
