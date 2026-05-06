# Persian Music Quiz (آزمون موسیقی ایرانی)

A web-based quiz application for identifying Persian musical modes (Dastgah and Avaz) fully localized in Farsi.

## Project Structure
- `index.html`: Main entry point with feedback container, 'Next' button, and Persian-responsive typography.
- `style.css`: Modern, responsive UI with a blue-turquoise color palette, CSS Grid layout, fixed layout container for stability, and consistent `Vazirmatn` typography.
- `script.js`: Game logic, including random track selection, scoring, user feedback (with filename-only display), and manual audio control progression.
- `data.json`: Database of tracks, mapped by file path and mode (labeled as `artist`).
- `tracks/`: Directory containing `.wav` audio files organized by Dastgah/Avaz subfolders.

## Technical Details
- **Frontend**: Vanilla JavaScript, HTML5 Audio API.
- **Styling**: Vanilla CSS with CSS Grid, media queries for responsiveness, and RTL direction with optimized text rendering for Farsi. Features a mobile-optimized 2x2 grid for options and compact vertical spacing to eliminate scrolling on small viewports.
- **Fonts**: Uses `Vazirmatn` (globally) via Google Fonts.
- **Data Format**: 
  ```json
  { "file": "tracks/ModeName/FileName.wav", "artist": "ModeName" }
  ```
  *Note: The `artist` field currently stores the Dastgah/Avaz name.*

## Conventions
- **Audio Files**: Should be in `.wav` format.
- **Organization**: Tracks must be placed in `tracks/{ModeName}/`.
- **Data Entry**: Every new track must be added to `data.json` with the correct relative path and its corresponding musical mode.
- **Persian Text**: Ensure all Dastgah/Avaz names are correctly spelled in Persian characters for consistent UI display.
- **UI Responsiveness**: Maintain a 2x2 grid for options on mobile devices to ensure all elements fit within the viewport without scrolling.

## AI Agent Instructions
- **Documentation Persistence**: For every change made to the codebase or application logic, the agent MUST update `GEMINI.md` to reflect the current architecture, conventions, and project structure.

## Running the Application
Since the app fetches `data.json` locally, a local server is required to bypass CORS restrictions.

### Live Demo
View the live application here: [https://ahmadrezabaghaie.github.io/PersianMusicQuiz/](https://ahmadrezabaghaie.github.io/PersianMusicQuiz/)

### Using Python
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Using Node.js
```bash
npx serve .
```
Then open the URL provided in the terminal.
