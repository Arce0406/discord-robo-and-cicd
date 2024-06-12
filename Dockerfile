# How to use
## docker build -t discord_bee_transltor .

# Use nodejs slim version for minify
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# 啟用pnpm
RUN corepack enable
# 指定工作路徑
COPY . /app
WORKDIR /app

# Create a new image for production dependencies
FROM base AS prod-deps
# Install production dependencies
# use a cache if available
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Create build image for building the TypeScript code
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add typescript -g
RUN pnpm run build

# 設定環境變數
ARG DISCORD_TOKEN
ENV DISCORD_TOKEN=${DISCORD_BOT_TOKEN}
ARG DISCORD_CLIENT_ID
ENV DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}

# Create an image base
FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
CMD [ "pnpm", "start" ]