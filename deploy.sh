#!/bin/sh

# update git
git reset --hard HEAD;
git pull;

# reinstall modules
rm -rf node_modules;
npm install --no-optional;

# generate static files
npm run dist;

# restart web server
sudo service nginx restart
