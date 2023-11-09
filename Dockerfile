# Stage 1: Install dependencies
FROM node:18 AS deps
WORKDIR /next-template
COPY package.json package-lock.json ./
RUN npm install

# Stage 2: Build the source code
COPY . .
RUN npm install -g npm@latest
RUN npm run build 

# Stage 3: Production image
ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD \
    wget --quiet --spider http://localhost:3000/ || exit 1

ENTRYPOINT ["npm", "start"]
