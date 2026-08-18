#!/bin/bash
set -e

# Build Sanity Studio
cd sanity
npm install
npx sanity build ../output/studio

# Copy static files to output root
cd ..
cp index.html output/index.html
cp app.html output/app.html
