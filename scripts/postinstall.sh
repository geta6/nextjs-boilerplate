#!/bin/sh

BASEDIR=$(dirname $0)

if [ ! -h "${BASEDIR}/../.git/hooks/pre-commit" ]; then
  echo "!! Symlink to git precommit hook"
  ln -sfv "${BASEDIR}/precommit.sh" "${BASEDIR}/../.git/hooks/pre-commit"
fi

if [ ! -f "${BASEDIR}/../.envrc" -a -x "`which direnv`" ]; then
  echo "!! Enable direnv support"
  echo 'export PATH="$(npm bin):$PATH"' > "${BASEDIR}/../.envrc"
  direnv allow
else
  echo 'direnv skipped.'
fi

if [ ! -f "${BASEDIR}/../app/.env" ]; then
  echo "!! Copy to local env file"
  cp -fv "${BASEDIR}/../.env.example" "${BASEDIR}/../app/.env"
fi
