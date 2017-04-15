#!/usr/bin/env bash

rm -rf ./css
rm -rf ./js
rm -rf ./*.html

cd ../../../domination
pwd
lein clean
lein cljsbuild once min
cd -

cp -r ../../../domination/resources/public/* .
