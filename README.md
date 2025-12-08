# Life in the UK Test Prep

A mobile-first Progressive Web App (PWA) to help you study and practice for the Life in the UK test.

## Features

### Learning Section
- Browse all chapters from the official guide
- Easy navigation between chapters and sections
- Mobile-optimized reading experience

### Practice Tests
- Dynamic test generation with 24 questions (official format)
- 45-minute timer (matches official test)
- Immediate feedback with explanations
- Shows correct answers when you get questions wrong
- Links to relevant chapters for review

### Progress Tracking
- Track all your test results
- Exam readiness indicator based on recent performance
- Failed questions tracker with easy review
- Test history with scores and dates

### Additional Features
- **Mobile-First Design**: Optimized for phones and tablets
- **Progressive Web App**: Install on Android and iOS devices
- **Offline Support**: Works without internet connection
- **Local Storage**: Your progress is saved locally

## Setup

### Generate Icons (Optional but Recommended)
For the best PWA experience, generate icon files:

**Option 1: Using Browser**
1. Open `generate-icons.html` in your browser
2. Icons will be automatically downloaded
3. Place `icon-192.png` and `icon-512.png` in the project folder

**Option 2: Using Node.js**
```bash
npm install canvas
node create-icons.js
```

The app will work without icons, but they improve the installation experience.

## Installation

### On Android:
1. Open the app in Chrome browser
2. Tap the menu (three dots)
3. Select "Add to Home screen" or "Install app"
4. The app will appear on your home screen

### On iOS (iPhone/iPad):
1. Open the app in Safari browser
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. The app will appear on your home screen

### On Desktop:
1. Open the app in Chrome/Edge browser
2. Click the install icon in the address bar
3. Or go to Settings > Apps > Install this site as an app

## Usage

1. **Learning**: Navigate to the "Learn" section to read through chapters
2. **Practice**: Go to "Test" section and click "Start New Test"
3. **Review**: Check "Progress" section to see your readiness and review failed questions
4. **Track Progress**: Your test results and failed questions are automatically saved

## Exam Readiness Indicator

The app analyzes your recent test performance to determine if you're ready:
- **Ready**: Average score ≥85% with at least 3 recent passes
- **Almost Ready**: Average score ≥75% with at least 2 recent passes
- **Keep Practicing**: Lower scores or inconsistent performance

## Official Test Format

- 24 multiple-choice questions
- 45 minutes to complete
- 75% passing score (18 correct answers)
- Questions based on all chapters of the official guide

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks)
- Progressive Web App (PWA) with service worker
- Local storage for progress tracking
- Responsive design for all screen sizes

## Browser Support

- Chrome/Edge (recommended)
- Safari (iOS)
- Firefox
- Any modern browser with service worker support

## Notes

- All progress is stored locally in your browser
- No data is sent to any server
- Works completely offline after first load
- Questions are based on the official Life in the UK guide content

## Development

To run locally:
1. Open `index.html` in a web browser
2. For PWA features, use a local server (e.g., `python -m http.server` or `npx serve`)

## License

This is a study tool based on the official Life in the UK guide content.

