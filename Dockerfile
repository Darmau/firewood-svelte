FROM node:lts-alpine3.17
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
ENV PORT=1216
EXPOSE 1216
CMD ["node", "-r", "dotenv/config", "build"]