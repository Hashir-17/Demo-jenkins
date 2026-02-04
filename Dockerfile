# Step 1: Use an official Node.js image with a higher version (Node.js 16 in this case)
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Step 4: Install the app dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the port the app will run on (3000 in this case)
EXPOSE 3000

# Step 7: Run the app when the container starts
CMD ["npm", "start"]
