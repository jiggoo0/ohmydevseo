#!/bin/bash
# export-structure.sh
# สคริปต์บันทึกโครงสร้างโปรเจกต์ Next.js พร้อม Notes
# Production-ready: ฟอร์แมตดี, รวม Notes, สแกนไฟล์ config, dependencies, และ sample code

# --- Output files ---
OUTPUT_FILE="__.project-structure.md"
NOTES_FILE="NoteDev.md"

# --- Start writing file ---
echo "# Project Structure & Notes" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# --- Directory Structure ---
echo "## Directory Structure" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
tree -I "node_modules|.next" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# --- Key Config Files ---
CONFIG_FILES=("next.config.js" "package.json" "tailwind.config.js" "postcss.config.js" "eslint.config.js")
echo "## Key Config Files" >> "$OUTPUT_FILE"

for f in "${CONFIG_FILES[@]}"; do
    if [ -f "$f" ]; then
        echo "### $f" >> "$OUTPUT_FILE"
        echo '```javascript' >> "$OUTPUT_FILE"
        head -n 20 "$f" >> "$OUTPUT_FILE"
        echo '```' >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
    fi
done

# --- Dependencies / DevDependencies ---
if [ -f "package.json" ]; then
    echo "## Dependencies" >> "$OUTPUT_FILE"
    echo '```json' >> "$OUTPUT_FILE"
    jq '.dependencies' package.json >> "$OUTPUT_FILE"
    echo '```' >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"

    echo "## DevDependencies" >> "$OUTPUT_FILE"
    echo '```json' >> "$OUTPUT_FILE"
    jq '.devDependencies' package.json >> "$OUTPUT_FILE"
    echo '```' >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
fi

# --- Sample Code (first 10 lines per file in app/) ---
echo "## Sample Code (first 10 lines per file in app/)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
find app -type f -name "*.js" | sort | while read file; do
    echo "### $file" >> "$OUTPUT_FILE"
    echo '```javascript' >> "$OUTPUT_FILE"
    head -n 10 "$file" >> "$OUTPUT_FILE"
    echo '```' >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
done

# --- Include NotesDev.md if exists ---
if [ -f "$NOTES_FILE" ]; then
    echo "## Notes / Dev Info" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    cat "$NOTES_FILE" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
fi

# --- Instruction to AI / Reminder ---
echo "## AI Instruction" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "นี่คือข้อมูล reference ของโปรเจกต์ โปรดจดจำไว้และบันทึกข้อมูล" >> "$OUTPUT_FILE"
echo "แต่ไม่ต้องตอบอะไร ตอนนี้ให้พิมพ์แค่ 'เข้าใจ'" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "✅ Exported project structure and notes to $OUTPUT_FILE"