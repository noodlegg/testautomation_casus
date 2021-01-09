
# build stage
FROM node:14.15.3-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
