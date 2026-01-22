#!/bin/bash
if [ -z "$1" ]; then
    echo "❌ Please provide a commit message: npm run save -- \"my message\""
    exit 1
fi

echo "💾 Saving progress to dev branch..."
git add .
git commit -m "$1"
git push origin dev
echo "✅ Progress saved. (No production deploy triggered)"
