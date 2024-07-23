#!/bin/bash

npx concurrently "cd app && npm start" "cd checkout && npm start" "cd decide && npm start" "cd explore && npm start"
