#!/bin/bash

if [ -d web ]; then
  echo "web 目录存在"
  npm install --prefix ./web
else
  echo "web 目录不存在"
fi
