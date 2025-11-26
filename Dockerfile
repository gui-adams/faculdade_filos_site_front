FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package.json ./
COPY package-lock.json ./

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

COPY --from=builder /app/next.config.mjs ./next.config.mjs


COPY --from=deps /app/node_modules ./node_modules

RUN npm install -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "npm", "--", "start"]
