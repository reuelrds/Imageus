# Create image based on the official MongoDB image hosted on Docker Hub
FROM mongo

# Create a directory where our database files will be placed
RUN mkdir -p /seed/data

# Change directory so that our commands run inside this new directory
WORKDIR /seed/data

# Get all the files needed to seed the database
COPY *.json /seed/data/

# Copy Seed script into docker-entrypoint-initdb.d so that it can bw automatically be executed
COPY ./seed_db.sh /docker-entrypoint-initdb.d

# Make the Seed Script Executable
RUN chmod +x /docker-entrypoint-initdb.d/seed_db.sh

# Mongo Env Variables
ENV MONGO_INITDB_DATABASE Imageus
ENV MONGO_INITDB_ROOT_USERNAME reuelrds
ENV MONGO_INITDB_ROOT_PASSWORD imageus_devops

# Expose Port
EXPOSE 27017

# Run Mongod
CMD ["mongod"]

