#!/bin/bash

cd app
rm -rf dist
BASE_URL="https://module-federation-tractor-v2.florian-rappl.de/" npm run build
cd ..

cd checkout
rm -rf dist
npm run build
cd ..

cd decide
rm -rf dist
BASE_URL="https://module-federation-tractor-v2.florian-rappl.de/decide/" npm run build
cd ..

cd explore
rm -rf dist
npm run build
cd ..

rm -rf dist
mkdir dist
mv app/dist/* dist/
mkdir dist/checkout
mv checkout/dist/* dist/checkout/
mkdir dist/decide
mv decide/dist/* dist/decide/
mkdir dist/explore
mv explore/dist/* dist/explore/
