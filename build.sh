#!/bin/bash
set -e

mkdir -p output

# Build Sanity Studio (--yes skips interactive prompts)
cd sanity
npm install
echo "y" | npx sanity build ../output/studio

# Copy Studio's static assets to root /static/ so hardcoded paths resolve
cd ..
if [ -d output/studio/static ]; then
  cp -r output/studio/static output/static
fi

# Copy static files to output root
cp index.html output/index.html
cp app.html output/app.html
