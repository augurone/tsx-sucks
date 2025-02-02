#!/bin/bash

export NVM_DIR="$HOME/.nvm"

# Configuration variables
REMOTE_USER="ubuntu"           # Replace with the remote username
REMOTE_HOST="64.111.98.218"    # Replace with the remote server's hostname or IP address
PEM_FILE="./babalonsalon.pem"  # Replace with the full path to your PEM file
REMOTE_PATH="babalonsalon.org" # Replace with the full path to the remote directory
REMOTE_GIT_REPO="upstream"     # Replace with your git remote name, typically 'origin'
GIT_BRANCH="BabaloSalon"       # Replace with the git branch you want to pull
APP_NAME="tsx-sux"             # Replace with your PM2 application name
NVM_PATH="/home/ubuntu/.nvm/versions/node/v18.17.1/bin/"

# Check if the PEM file exists
if [ ! -f "$PEM_FILE" ]; then
    echo "PEM file not found: $PEM_FILE"
    exit 1
fi

# SSH into the remote server and run commands
echo "Entering script"
ssh -i "$PEM_FILE" "$REMOTE_USER@$REMOTE_HOST" << EOF
    echo "Navigating to $REMOTE_PATH"
    cd "$REMOTE_PATH"
    pwd
    echo "Node version"
    node -v

    echo "Pulling latest changes from Git"
    git pull "$REMOTE_GIT_REPO" "$GIT_BRANCH"

    echo "Running npm build"
    npm run build

    echo "Restarting application with PM2"
    "$NVM_PATH"pm2 restart "$APP_NAME"
EOF

echo "Script completed."
