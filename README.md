# React Snapshot

A React demo page that captures a snapshot of its own content and downloads it as a PNG image,
using [html2canvas](https://html2canvas.hertzen.com/).

**Live demo:** <https://snapshot.davidebalice.dev/>

![Screenshot](docs/screenshot.png)

## Features

- "Capture and download screenshot" button fixed on the page
- Renders the page content to a canvas with html2canvas
- Downloads the result as `snapshot.png`
- The capture button itself is hidden from the generated image
- Responsive image gallery used as sample content

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vite.dev/)
- [html2canvas](https://html2canvas.hertzen.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS Modules

## Getting started

### Requirements

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/davidebalice/react-snapshot.git
cd react-snapshot
npm install
```

### Available scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server             |
| `npm run build`   | Create a production build in `dist/`     |
| `npm run preview` | Preview the production build locally     |

## Project structure

```
src/
├── components/    # Header, footer, layout wrapper and page contents
├── assets/        # Images
├── App.jsx        # Capture logic
└── main.jsx       # Application entry point
```

## Author

**Davide Balice** – [davidebalice.dev](https://www.davidebalice.dev)
