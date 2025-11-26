# MAPZ Design System

This document explains the global design variables and how to use them consistently across all pages.

## File Structure

```
_sass/
├── _variables.scss   # Global design tokens (colors, fonts, spacing, etc.)
├── _custom.scss      # Custom MAPZ styles using global variables
└── (theme files)     # Minimal Mistakes theme files
```

## Color Palette

### Primary Colors
- `$primary-color`: `#1a472a` - Deep green (main brand color)
- `$primary-light`: `#2d6a42` - Lighter green for hover states
- `$primary-dark`: `#0f2818` - Darker green for accents

### Secondary Colors
- `$secondary-color`: `#d4941e` - Gold accent
- `$secondary-light`: `#e6a82e` - Light gold
- `$secondary-dark`: `#b87a0f` - Dark gold

### Neutral Colors
- `$white`: `#ffffff`
- `$light-gray`: `#f5f5f5`
- `$medium-gray`: `#e0e0e0`
- `$dark-gray`: `#333333`
- `$black`: `#000000`

## Typography

### Font Families
```scss
$font-family-base: // System fonts stack (optimal for web)
$font-family-heading: // For titles and headings
$font-family-monospace: // For code blocks
```

### Font Sizes
```scss
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px (default)
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
$font-size-2xl: 1.5rem;    // 24px
$font-size-3xl: 1.875rem;  // 30px
$font-size-4xl: 2.25rem;   // 36px
$font-size-5xl: 3rem;      // 48px
```

### Font Weights
```scss
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$font-weight-extrabold: 800;
```

## Spacing

All spacing uses a consistent scale (multiples of 8px):

```scss
$space-xs: 0.25rem;   // 4px
$space-sm: 0.5rem;    // 8px
$space-md: 1rem;      // 16px
$space-lg: 1.5rem;    // 24px
$space-xl: 2rem;      // 32px
$space-2xl: 3rem;     // 48px
$space-3xl: 4rem;     // 64px
$space-4xl: 6rem;     // 96px
```

## Using Variables in Your Code

### Example 1: Custom SCSS in a new component

```scss
@import "variables";

.my-component {
  background-color: $primary-color;
  color: $white;
  padding: $space-lg;
  border-radius: $border-radius-md;
  font-size: $font-size-lg;
  font-family: $font-family-heading;
  
  &:hover {
    background-color: $primary-light;
    transition: all $transition-base;
  }
}
```

### Example 2: Using button classes in Markdown

```markdown
[Join Us](/join/){: .btn .btn--primary}
[Learn More](/about/){: .btn .btn--secondary}
```

### Example 3: CSS class utilities in HTML

```html
<div class="text-primary">Primary colored text</div>
<div class="text-center">Centered text</div>
```

## Available Button Styles

```
.btn--primary    // Green button (default state)
.btn--secondary  // Green outline button
.btn--accent     // Gold button
```

## Mixins (Advanced)

Pre-built mixins for common patterns:

```scss
@include card-shadow;      // Adds card styling with shadow
@include gradient-primary; // Primary color gradient
@include gradient-secondary; // Secondary color gradient
```

## Best Practices

1. **Always use variables**: Never hardcode colors, fonts, or spacing in new styles
2. **Use the correct font size**: Don't use arbitrary pixel values
3. **Maintain spacing rhythm**: Use the spacing scale for consistency
4. **Update variables, not individual files**: If you need to change a color globally, update `_variables.scss`
5. **Use semantic class names**: Give classes meaningful names that describe their purpose

## Adding New Styles

1. Edit `_sass/_custom.scss` to add new component styles
2. Use the variables from `_sass/_variables.scss`
3. Test in the Jekyll server: `bundle exec jekyll serve`

## Changing Global Styles

To update a color, font, or spacing value site-wide:

1. Open `_sass/_variables.scss`
2. Change the variable value
3. All pages using that variable automatically update!

## Resources

- [Sass documentation](https://sass-lang.com/)
- [Minimal Mistakes theme docs](https://mmistakes.github.io/minimal-mistakes/)
