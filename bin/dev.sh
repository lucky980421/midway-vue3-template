#!/bin/sh
# 随机端口：2000-9000
export VITE_PORT=$((RANDOM % 7001 + 2000))

# 后端端口ip
export PORT=$((RANDOM % 7001 + 2000))
export IP="0.0.0.0"

VITE_PORT=$VITE_PORT npm run dev:all
echo "$VITE_PORT 前端端口"
