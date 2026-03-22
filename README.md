# Market on the Hill Menu Demo

This project is a direct adaptation of the working Top Hat demo.
It keeps the same core single-page architecture, local-storage settings model, and timed section/page rotation behavior, while changing the content and branding for Market on the Hill.

## Files that control the demo

- `index.html`
  - branding/header markup
  - settings modal structure
  - section title/subtitle placeholders
- `default-data.js`
  - demo data
  - default section visibility
  - default branding text and rotation settings
- `app.js`
  - section rendering
  - rotation behavior
  - settings save/load logic
  - admin editor behavior
- `styles.css`
  - light visual theme
  - layout styling
  - card appearance
  - settings button placement
- `assets/market-on-the-hill-logo.svg`
  - simplified Market on the Hill brand mark used in the header

## Current menu sections

- Sandwiches
- Drinks
- Soups
- Sides

## Notes

- Rotation logic is preserved from the Top Hat build: the display rotates through pages within a section, then advances to the next enabled section.
- Settings are now opened from a subtle top-right gear button instead of a hidden press-and-hold hotspot.
- Sandwiches now render as boxed cards, consistent with the other menu sections.
- The included logo asset is a simplified SVG recreation based on the logo image provided in chat.
