#!/bin/bash
set -e

docker-compose -f ./docker-compose.local.yml up --build -d
docker attach apollo-server-ts-starter