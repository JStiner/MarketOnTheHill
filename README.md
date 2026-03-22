# Market on the Hill Menu Demo

Public-facing rotating menu demo for Market on the Hill.

## Files
- `index.html` - display shell, header, settings modal, editor modal
- `app.js` - render logic, section rotation, settings, local storage
- `default-data.js` - demo menu data for sandwiches, drinks, soups, and sides
- `styles.css` - light Market on the Hill visual theme
- `assets/market-on-the-hill-logo.svg` - bundled logo asset used by the display

## Notes
- This build is intended as a Market on the Hill demo.
- Branding, labels, and default demo data use Market on the Hill terminology.
- The display rotates through enabled sections and paged items based on local settings.
- Settings remain device-local through browser storage.

## Layout fix

- Forced base menu grid to 3 columns on tablet/default layouts so layout helper classes cannot fall back to 4 columns.
