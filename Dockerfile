FROM node:lts-alpine3.13

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@4.0.3 -g

# Add app
COPY . ./

# Start app
CMD [ "npm", "start" ]