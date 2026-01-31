# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

# Change ownership and switch to non-root user
RUN chown -R nodeuser:nodejs /app
USER nodeuser

# Start the application
CMD ["node", "server.js"]