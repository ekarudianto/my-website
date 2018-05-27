#!/bin/bash
set -e

# Set colors
declare -r RED='\033[38;5;202m'
declare -r GREEN='\033[0;32m'
declare -r BLUE='\033[38;5;75m'
declare -r YELLOW='\033[38;5;226m'
declare -r NC='\033[0m'
declare -r ERROR='\033[38;5;160m'

# Script path
declare -r CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# Build path
declare -r DIST_DIR="${CURRENT_DIR}/dist"
# Deployed domain
declare -r DEPLOYED_DOMAIN="ekarudianto.github.io"
# Remote distribution repo
declare -r DIST_REPO="https://github.com/ekarudianto/${DEPLOYED_DOMAIN}.git"
# Temporary remote repo path
declare -r TMP_REPO_PATH="/tmp/${DEPLOYED_DOMAIN}"
# Today date
declare -r TODAY=`date +%Y-%m-%d`
# Commit message on github
declare COMMIT_MSG="Deployed at ${TODAY}"

# Display help
display_help() {
    echo -e "$0\n"
    echo -e "${RED}NAME"
    echo -e "${NC}\t$0 - Deploy my github page"
    echo -e "${RED}SYNOPSIS${NC}"
    echo -e "${RED}\tUsage: $0 ${NC}[${BLUE}OPTION${NC}]"
    echo -e "${RED}DESCRIPTION${NC}"
    echo -e "${NC}\tDeploy my github page to ekarudianto.github.io."
    echo -e "${RED}\t-h ${BLUE}HELP"
    echo -e "${NC}\t\tdisplay this help."
    echo -e "${RED}\t-c ${BLUE}COMMIT MESSAGE [optional]"
    echo -e "${NC}\t\tadd commit message to deployment. Default commit message is '${COMMIT_MSG}'"
    echo -e "${RED}AUTHOR"
    echo -e "${NC}\tWritten by Eka Rudianto."
}

remove_tmp_dir() {
    cd
    rm -rf $TMP_REPO_PATH
}

error() {
    echo -e "${ERROR}$1${NC}"
}

info() {
    echo -e "${BLUE}$1${NC}"
}

warn() {
    echo -e "${YELLOW}$1${NC}"
}

usage() {
    error "Try '$0 -h' for more information."
	exit 1;
}

# Get parameters
while getopts "hc:" optname
	do
		case ${optname} in
            "h")
				display_help
				exit 1
			    ;;
            "c")
                declare COMMIT_MSG=${OPTARG}
                info "Commit message : ${COMMIT_MSG}"
                ;;
            ":")
			    error "Option '${optname}' needs a value"
			    usage
			    ;;
			*)
			    usage
			    ;;
		esac
	done

# Build the app
cd $CURRENT_DIR

info "Installing dependencies"
yarn install

info "Build app"
yarn build

# Check if directory/symlink already exist
if [ -d "$TMP_REPO_PATH" ]; then 
  if [ -L "$TMP_REPO_PATH" ]; then
    warn "Symlink detected, removing symlink"
    rm "$TMP_REPO_PATH"
  else
    warn "TMP directory is exist, removing directory"
    rm -rf "$TMP_REPO_PATH"
  fi
fi

# Clone existing repo
info "Clone remote repo"

git clone $DIST_REPO $TMP_REPO_PATH

# Pull update 
info "Pull updates"

cd $TMP_REPO_PATH
git pull origin master

# Copying contents
info "Copying ${DIST_DIR} folder content"

cd $DIST_DIR
cp * $TMP_REPO_PATH
cd $TMP_REPO_PATH

# Check if there's no changes
if [[ -z $(git status --porcelain) ]]; then 
  warn "Nothing to commit, revert back"
  remove_tmp_dir
  exit 1;
fi

# Push new updates
info "Pushing new updates"

git add .
git commit -m "${COMMIT_MSG}"
git push origin master

# Remove tmp dir
remove_tmp_dir

info "\n===================="
info "\nChanges are deployed at ${TODAY}"
info "Commit message : ${COMMIT_MSG}\n"
info "===================="