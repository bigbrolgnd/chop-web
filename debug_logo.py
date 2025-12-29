import re

input_path = 'chop-web-main-logo.svg'
output_path = 'public/logo.svg'

with open(input_path, 'r') as f:
    content = f.read()

# 1. Set explicit width/height
content = content.replace('width="100%" height="100%"', 'width="2484" height="2484"')

# 2. Add ID to Sun (first use tag) - using a robust replacement
content = re.sub(
    r'(<use\s+xlink:href="#_Image1"[^>]*?)(\s*/>)',
    r'\1 id="pixel"\2',
    content
)

# 3. Add ID to Main Text (second group)
# Look for the group containing the specific path of the text
content = re.sub(
    r'(<g>)(\s*<path d="M625\.325)',
    r'<g id="main-text">\2',
    content
)

# 4. Inject DEBUG styles (Force Visible)
style_content = """
<style>
    /* DEBUG STYLE - NO ANIMATION, FORCE VISIBLE */
    #pixel, #boy, #mother, #dad, #girl, #girl-hands, #left-house, #right-house, #main-text, #Layer-1 {
        opacity: 1 !important;
        visibility: visible !important;
    }
</style>
"""

# Insert style before closing svg
content = content.replace('</svg>', style_content + '</svg>')

with open(output_path, 'w') as f:
    f.write(content)

print(f"Debug logo generated at {output_path}")
