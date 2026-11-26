import re
import json

with open('/root/.gemini/antigravity-ide/brain/cbab44f9-b1d9-46ad-87a7-e8631bcb00c0/scratch/framer_styles.css') as f:
    css = f.read()

# Extract grid / flex container rules
grids = re.findall(r'(\.framer-[a-zA-Z0-9_\-]+\s*\{[^}]*grid-[^}]+\})', css)
print(f"Grid rules ({len(grids)}):")
for g in grids[:10]:
    print("\n", g.strip())

# Extract transform and transition rules
transforms = re.findall(r'(\.framer-[a-zA-Z0-9_\-]+\s*\{[^}]*will-change:[^}]+\})', css)
print(f"\nWill-change rules ({len(transforms)}):")
for t in transforms[:10]:
    print("\n", t.strip())

