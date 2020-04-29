#!/bin/bash

# Seed the mongo database
# Steps:
#   1. List all json files present in PWD (ie. the current Working directory)
#   2. Strip .json from the file name
#   3. Iterate over filenames and insert the data into specified Mongo Database

ls -1 *.json | sed 's/.json$//' | while read col; do 
    mongoimport -d Imageus -c $col --jsonArray < $col.json;
done