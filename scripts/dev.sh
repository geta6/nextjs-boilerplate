#!/bin/bash

set -eu

if [[ ! -f "./app/.env.local" ]]; then
  cp ./.env.example ./app/.env.local
fi

# eval "$(cat ./app/.env.local <(echo) <(declare -x))"

next dev app
