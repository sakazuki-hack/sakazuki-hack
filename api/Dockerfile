FROM node:18-slim

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y yarn

# Expressアプリケーションの依存関係をインストール
COPY package.json package-lock.json ./
RUN npm install

# corsモジュールをインストール
RUN npm install cors

WORKDIR /app
COPY package.json yarn.lock* ./

# 依存関係のインストール
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev", "--host"]
