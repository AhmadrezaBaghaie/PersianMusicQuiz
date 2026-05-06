# Persian Music Quiz (آزمون موسیقی ایرانی)

A web-based interactive quiz application designed to help users identify various Persian musical modes (**Dastgah** and **Avaz**).

## Features
- **Interactive Quiz**: Randomly selects audio clips from a wide range of Persian musical modes.
- **Visual Feedback**: Provides immediate visual confirmation if the selection is correct or incorrect.
- **Game Mechanics**:
  - **Randomized Options**: Each question presents 4 randomized choices.
  - **Reveal Logic**: Built-in "Don't know" (نمی‌دانم) functionality to reveal the correct answer.
  - **Auto-Transition**: Automatically advances to the next question 5 seconds after the audio finishes.
- **Localized UI**: Fully localized in Farsi for a seamless user experience.
- **Responsive Design**: Mobile-friendly layout using CSS Grid and optimized typography.

## Supported Modes
The quiz currently includes tracks from the following Dastgahs and Avazes:
- ابوعطا، افشاری، بیات اصفهان، بیات ترک، بیات کرد، چهارگاه، دشتی، راست پنجگاه، سه گاه، شور، ماهور، نوا، همایون.

## Technical Stack
- **Frontend**: Vanilla JavaScript (ES6+), HTML5 Audio API.
- **Styling**: Vanilla CSS with modern features (Grid, media queries) and RTL support.
- **Typography**: Uses [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) for consistent and readable Persian text.

## Project Structure
- `index.html`: The main entry point.
- `script.js`: Core game logic (loading data, handling interactions, managing scoring, auto-transition).
- `style.css`: UI and layout definitions (fixed-height interaction area for stability).
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

## Live Demo
Check out the live application here: [https://ahmadrezabaghaie.github.io/PersianMusicQuiz/](https://ahmadrezabaghaie.github.io/PersianMusicQuiz/)
