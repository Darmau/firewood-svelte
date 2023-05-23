FROM node:lts-alpine3.17 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install --production

FROM node:lts-alpine3.17
USER node:node
WORKDIR /app
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .
ENV PORT=1216
EXPOSE 1216
CMD ["node", "-r", "dotenv/config", "build"]