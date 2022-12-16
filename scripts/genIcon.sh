#!/usr/bin/env sh
set -ex
BASE_ICON="./public/icon_128.png"
OUT_DIR="./public/icons"

SIZES=(16 32 48 128)

for size in ${SIZES[@]}; do
  echo "$size"
  sips -Z "$size" "${BASE_ICON}" -o "${OUT_DIR}/icon_${size}.png"
done
