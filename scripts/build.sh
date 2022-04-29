#!/bin/sh

set -eu

if [ -z "${NODE_ENV+x}" ]; then
  export NODE_ENV=production
fi

next build app
