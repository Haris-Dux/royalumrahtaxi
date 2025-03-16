#!/bin/bash

cd /root/royalumrahtaxi

# Modify a dummy file to ensure there's always a change
echo "Last commit: $(date)" >> auto_commit_log.txt

# Add all changes
git add .

# Commit changes with a timestamp
git commit -m "Automated commit on $(date +\%Y-\%m-\%d_\%H:\%M:\%S)"


# Push to the repository
git push origin main  # Change 'main' if your branch is different

