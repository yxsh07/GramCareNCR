# Syncing Files from Main to GH-Pages

This document provides instructions for copying all files from the main branch to the gh-pages branch.

## Automated Method (Recommended)

A GitHub Actions workflow has been set up to automatically sync files from the main branch to the gh-pages branch.

### Triggers

The workflow runs automatically when:
- Code is pushed to the main branch
- Manually triggered via GitHub Actions UI

### Manual Trigger

1. Go to the repository on GitHub
2. Click on "Actions" tab
3. Select "Sync Main to GH Pages" workflow
4. Click "Run workflow" button
5. Select the main branch
6. Click "Run workflow"

## Manual Method

If you need to manually copy files from main to gh-pages:

```bash
# Clone the repository
git clone https://github.com/yxsh07/GramCareNCR.git
cd GramCareNCR

# Fetch all branches
git fetch --all

# Checkout gh-pages branch
git checkout gh-pages

# Remove all files except .git directory
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# Copy all files from main branch
git checkout origin/main -- .

# Commit the changes
git add .
git commit -m "Sync files from main branch"

# Push to remote
git push origin gh-pages
```

## What Gets Copied

All files from the main branch will be copied to gh-pages, including:
- Source code files (.tsx, .ts)
- Configuration files (package.json, tsconfig.json, vite.config.ts)
- Assets (images, icons)
- Documentation (README.md)
- Build configuration

## Notes

- The gh-pages branch will be completely overwritten with content from main
- Any files unique to gh-pages will be removed
- The .git directory is preserved
