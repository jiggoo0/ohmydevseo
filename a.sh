#!/bin/bash
# rename-topup.sh
# รันจาก root ของโปรเจกต์: ./rename-topup.sh

TOPUP_DIR="public/topup"

declare -A FILE_MAP=(
  ["090622-บัตรRZ.png.webp"]="raz-gold.png"
  ["090638-บัตรRiot.png.webp"]="riot.png"
  ["090749-บัตรEX.png.webp"]="ex-cash.png"
  ["090940-บัตรGarena.png.webp"]="garena.png"
  ["091023-บัตรTrue.png.webp"]="true-wallet.png"
  ["095333-บัตรStam.png.webp"]="steam.png"
  ["121738-PUBGไทย.png.webp"]="pubg-thailand.png"
  ["121909-PUBG-ตปท.png.webp"]="pubg-server.png"
)

echo "เริ่มเปลี่ยนชื่อไฟล์ใน $TOPUP_DIR ..."

for OLD_NAME in "${!FILE_MAP[@]}"; do
  NEW_NAME=${FILE_MAP[$OLD_NAME]}
  if [ -f "$TOPUP_DIR/$OLD_NAME" ]; then
    mv "$TOPUP_DIR/$OLD_NAME" "$TOPUP_DIR/$NEW_NAME"
    echo "เปลี่ยนชื่อ $OLD_NAME -> $NEW_NAME"
  else
    echo "ไม่พบไฟล์: $OLD_NAME"
  fi
done

echo "เรียบร้อย ✅"
