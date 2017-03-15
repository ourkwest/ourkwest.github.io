#!/usr/bin/env bash

rm -rf games/domination/css
rm -rf games/domination/js
rm -rf games/domination/index.html
cp -r ../domination/resources/public/* games/domination
