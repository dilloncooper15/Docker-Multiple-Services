FROM node:alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install > /dev/null 2>&1
COPY ./ ./
CMD ["npm", "run", "start"]