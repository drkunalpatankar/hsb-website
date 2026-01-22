#!/bin/bash

# Ensure we are on dev branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "dev" ]; then
    echo "❌ You must be on the 'dev' branch to publish."
    exit 1
fi

echo "🚀 Starting publication process..."

# Stash any uncommitted changes to be safe
echo "📦 Stashing any uncommitted changes..."
git stash

# Checkout main (production)
echo "🔄 Switching to production branch (main)..."
git checkout main
git pull origin main

# Merge dev into main
echo "🔀 Merging development changes..."
git merge dev

# Push main to trigger Vercel
echo "⬆️ Pushing to production (Triggers Vercel)..."
git push origin main

# Switch back to dev
echo "🔙 Returning to development branch (dev)..."
git checkout dev

# Pop stashed changes if any
echo "📦 Restoring local changes..."
git stash pop

echo "✅ Publication complete! Vercel build triggered."
