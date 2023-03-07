# Base image
FROM node:18-alpine as intermediate
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
# Install app dependencies `npm install
RUN npm cache clear --force
RUN npm cache verify
RUN npm i -f

# Base image for start the server
FROM node:18-alpine
# Implements a simple process supervisor
RUN apk add dumb-init
# Create the work directory
RUN mkdir -p /devsu-service/src/app
# Set the work directory
WORKDIR /devsu-service/src/app
# Bundle app source
COPY . /devsu-service/src/app
# Bundle app source
COPY --from=intermediate ./node_modules ./node_modules
# Creates a "dist" folder with the production build
RUN npm run build
# Expose the port for request
EXPOSE 80
# Set timezone UTC
ENV TZ UTC
# Start the server using the production build
CMD ["dumb-init", "node", "dist/main.js"]