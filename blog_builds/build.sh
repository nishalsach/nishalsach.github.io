#!/bin/bash

# Build script for Hugo blog with search functionality

set -e  # Exit on error

echo "🔍 Generating search index..."
python3 scripts/create_search_index.py

echo "🏗️  Building Hugo site..."
hugo

echo "✅ Build complete!"
