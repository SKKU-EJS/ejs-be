# USAGE `docker build -f builder/Dockerfile .`

### BUILDER ###
FROM node:18.20.6-alpine AS builder

COPY . /build
WORKDIR /build

RUN npm install -g pnpm
RUN pnpm install

RUN npx prisma generate
RUN npm run build

EXPOSE 4000

### PRODUCTION ###
FROM node:18.20.6-alpine

ENV NODE_ENV=production
COPY --from=builder /build .
COPY ./builder/entrypoint.sh .

ENTRYPOINT ["./entrypoint.sh"]