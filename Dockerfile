# Use the official Node.js 18 image as the base for the build stage
FROM node:20.13-alpine3.19 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image to serve the app in the final stage
FROM node:20.13-alpine3.19 AS runner

# Set NODE_ENV to production for optimized performance
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy the built application and required files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
