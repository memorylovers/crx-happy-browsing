#!/usr/bin/env sh
set -ex
ROOT=$(dirname -- "$0")
PKG_NAME=$(npm pkg get name | jq -r "")
PKG_VERSION=$(npm pkg get version | jq -r "")
DATE=$(date "+%Y%m%d%H%M%S")
ZIP_NAME="${PKG_NAME}-v${PKG_VERSION}-${DATE}.zip"

OUT_DIR="./output"
DIST_DIR="./dist"

test -d "${OUT_DIR}" || mkdir "${OUT_DIR}"

zip -r "${OUT_DIR}/${ZIP_NAME}" "${DIST_DIR}"
