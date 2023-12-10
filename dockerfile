# Specify the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# # Copy the rest of the application code to the working directory
COPY . .

# dev mode the Next.js application
RUN yarn run build

# Expose the port that the application will run on
# EXPOSE 3000

# Start the application
# CMD ["yarn", "run","dev"]
