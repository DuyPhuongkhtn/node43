FROM node:20

WORKDIR /home/app

COPY package*.json ./

RUN yarn install

COPY prisma ./prisma/
RUN yarn prisma generate

COPY . .

EXPOSE 8080
CMD ["yarn", "start"]