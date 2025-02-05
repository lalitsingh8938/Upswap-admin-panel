# # Step 1: Use official Node.js image as base
# FROM node:18-alpine AS builder

# # Step 2: Set working directory
# WORKDIR /app

# # Step 3: Copy package files
# COPY package.json package-lock.json ./

# # Step 4: Install dependencies
# RUN npm install

# # Step 5: Copy the rest of the app
# COPY . .

# # Step 6: Build Vite app
# # RUN npm run build

# # Step 7: Use a lightweight Node.js server to serve the app
# RUN npm install -g serve

# # Step 8: Expose Vite's default port (5173)
# EXPOSE 5173

# # Step 9: Start the server in SPA mode
# CMD ["serve", "-s", "dist", "-l", "5173", "--single"]


# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Command to run the app
CMD ["npm", "run", "dev"]
