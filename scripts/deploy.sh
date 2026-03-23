#!/bin/bash
set -e

echo "Starting deployment simulation..."
mkdir -p release
cp -r dist/* release/
echo "Deployment package created in ./release"