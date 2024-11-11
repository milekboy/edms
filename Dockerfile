# # Use the official Node.js image for building
# FROM node:20.13-alpine3.19 AS builder

# # Set the working directory
# WORKDIR /app

# # Install dependencies with only essential files
# COPY package*.json ./
# RUN npm ci

# # Copy the rest of the application
# COPY . .

# # Build the application
# RUN npm run build

# # Use a smaller image for serving the app
# FROM node:20.13-alpine3.19 AS runner
# WORKDIR /app

# # Copy built app from builder stage
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/node_modules ./node_modules

# # Expose port and start the application
# EXPOSE 3000
# CMD ["npm", "start"]


FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev"]
