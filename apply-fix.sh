#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-.}"
cp components/home-sections.tsx "$TARGET/components/home-sections.tsx"
cp app/visual-revision.css "$TARGET/app/visual-revision.css"
echo "PRICE GUIDE v12 applied to: $TARGET"
