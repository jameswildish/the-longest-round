#!/bin/bash
set -e

mkdir -p output

# Build Sanity Studio (--yes skips interactive prompts)
cd sanity
npm install
echo "y" | npx sanity build ../output/studio

# Copy static files to output root
cd ..
cp index.html output/index.html
cp app.html output/app.html
