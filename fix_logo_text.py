import re

input_path = 'chop-web-main-logo.svg'
output_path = 'public/logo.svg'

with open(input_path, 'r') as f:
    content = f.read()

# 1. Set explicit width/height
content = content.replace('width="100%" height="100%"', 'width="2484" height="2484"')

# 2. Add ID to Sun (first use tag)
content = re.sub(
    r'(<use\s+xlink:href="#_Image1"[^>]*?)(\s*/>)',
    r'\1 id="pixel"\2',
    content
)

# 3. Add ID to Main Text (second group)
# We make sure to match the group start and the specific path start to identify the text group correctly.
content = re.sub(
    r'(<g>)(\s*<path d="M625\.325)',
    r'<g id="main-text">\2',
    content
)

# 4. Inject FINAL ANIMATION styles - FIXING TEXT VISIBILITY
# Changed slideIn to fadeIn for main-text to avoid any layout/clipping issues.
style_content = """
<style>
    /* 1. Initial State: Hidden */
    #pixel, #boy, #mother, #dad, #girl, #girl-hands, #left-house, #right-house, #main-text, #Layer-1 {
        opacity: 0;
    }

    /* 2. Keyframes */
    @keyframes fadeIn {
        to { opacity: 1; }
    }
    
    /* 3. Animations */
    
    /* Sun - Fade In */
    #pixel {
        animation: fadeIn 1.0s ease-out forwards;
        animation-delay: 0.2s;
    }

    /* Family and Houses - Fade In */
    #boy {
        animation: fadeIn 0.8s ease-out forwards;
        animation-delay: 0.5s;
    }
    #mother {
        animation: fadeIn 0.8s ease-out forwards;
        animation-delay: 1.0s;
    }
    #dad {
        animation: fadeIn 0.8s ease-out forwards;
        animation-delay: 1.5s;
    }
    #girl, #girl-hands {
        animation: fadeIn 0.8s ease-out forwards;
        animation-delay: 2.0s;
    }
    #left-house, #right-house {
        animation: fadeIn 0.8s ease-out forwards;
        animation-delay: 2.5s;
    }

    /* Text - Fade In (Changed from Slide In to ensure visibility) */
    #main-text {
        animation: fadeIn 1.0s ease-out forwards;
        animation-delay: 3.2s;
    }

    /* Subtitle - Fade In */
    #Layer-1 {
        animation: fadeIn 1.0s ease-out forwards;
        animation-delay: 3.8s;
    }
</style>
"""

# Insert style before closing svg
content = content.replace('</svg>', style_content + '</svg>')

with open(output_path, 'w') as f:
    f.write(content)

print(f"Fixed logo generated at {output_path}")
