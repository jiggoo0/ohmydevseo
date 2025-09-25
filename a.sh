#!/bin/bash
# clean-secrets.sh
# ลบ secrets (เช่น Personal Access Token) ออกจาก git history
# ใช้กับ GitHub Push Protection

# ตรวจสอบ git filter-repo
if ! command -v git-filter-repo &> /dev/null; then
    echo "git-filter-repo ไม่พบ! ติดตั้งก่อน เช่น: pip install git-filter-repo"
    exit 1
fi

# Backup ก่อน
echo "สร้าง backup branch ก่อน..."
git branch backup-before-secret-clean

# ลบ secret จากไฟล์ที่ระบุ
echo "ลบ secret จาก _NoteDev.md และ __.บันทึก.md ..."
git filter-repo --path _NoteDev.md --replace-text <(echo 'Personal Access Token==>REMOVED')
git filter-repo --path __.บันทึก.md --replace-text <(echo 'Personal Access Token==>REMOVED')

echo "ลบ secrets เสร็จแล้ว! ตรวจสอบไฟล์ก่อน push"
echo "ถ้าพร้อม: git push origin main --force"
