# Persian Music Quiz (آزمون موسیقی ایرانی)

A web-based interactive quiz application designed to help users identify various Persian musical modes (**Dastgah** and **Avaz**).

## Features
- **Interactive Quiz**: Randomly selects audio clips for the user to identify.
- **Visual Feedback**: Provides immediate visual confirmation if the selection is correct or incorrect.
- **Full Playback**: Allows users to listen to the entire audio clip after making their choice.
- **Manual Progression**: Users can progress through the quiz at their own pace using a manual "Next" button.
- **Localized UI**: Fully localized in Farsi for a seamless user experience.
- **Responsive Design**: Mobile-friendly layout using CSS Grid and optimized typography.

## Technical Stack
- **Frontend**: Vanilla JavaScript (ES6+), HTML5 Audio API.
- **Styling**: Vanilla CSS with modern features (Grid, media queries) and RTL support.
- **Typography**: Uses [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) for consistent and readable Persian text.

## Project Structure
- `index.html`: The main entry point.
- `script.js`: Core game logic (loading data, handling interactions, managing scoring).
- `style.css`: UI and layout definitions.
- `data.json`: Database file mapping files to musical modes.
- `tracks/`: Directory containing `.wav` audio files.

## Local Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/AhmadrezaBaghaie/PersianMusicQuiz.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PersianMusicQuiz
   ```
3. Start a local development server (Python example):
   ```bash
   python -m http.server 8000
   ```
4. Open `http://localhost:8000` in your browser.
