#!/bin/bash

cd ./client
npm run ionic:build --prod
firebase deploy
