#!/bin/bash

# Set Backend Host and Port
sed -i "s/backendURL: .*/backendURL: '$HOST',/" ./src/environments/env.ts
sed -i "s/backendPort: .*/backendPort: '$PORT',/" ./src/environments/env.ts

# Serve Angular website
npm "start"
