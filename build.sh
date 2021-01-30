#!/bin/bash
export NODE_OPTIONS='--max-old-space-size=8192'
webpack
cp src/index.html dist/index.html
cp src/style.css dist/style.css