######## Builder Phase ########
FROM node:alpine as builder

# Set current working directory
WORKDIR /app

# Copy and install dependencies in package.json
COPY ./package.json ./
RUN npm install > /dev/null 2>&1

# Copy remaining project files, not outlined in .dockerignore
COPY ./ ./

# Generate build directory
RUN npm run build


######## Runner Phase ########
FROM nginx

# Expose port
EXPOSE 3000

# Overwrite existing default.conf file with nginx's custom implementation of default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy build directory created in builder phase
COPY --from=builder /app/build /usr/share/nginx/html
