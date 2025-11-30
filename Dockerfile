FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD npm run build

FROM node:22-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build
CMD ["serve", "-s", "build", "-l", "3000"]
