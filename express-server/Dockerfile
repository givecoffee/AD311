# Use Node.js as the base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run your app
CMD ["node", "app.js"]