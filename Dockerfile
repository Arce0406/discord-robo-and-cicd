# Use nodejs slim version for minify
FROM node:20-slim AS base

# 指定工作路徑
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

RUN npm install

# 複製應用程式代碼
COPY . .

RUN npm run build

# 設定環境變數
# ARG DISCORD_TOKEN
# ENV DISCORD_TOKEN=${DISCORD_BOT_TOKEN}
# ARG DISCORD_CLIENT_ID
# ENV DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}

CMD [ "npm", "start"]