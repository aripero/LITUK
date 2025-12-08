# Quick Start Guide

## Getting Started

1. **Open the app**: Simply open `index.html` in your web browser
   - For best experience, use Chrome, Edge, or Safari
   - For PWA features, use a local server (see below)

2. **Using a local server** (recommended for PWA features):
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Node.js (if you have it)
   npx serve
   
   # Then open: http://localhost:8000
   ```

3. **Generate icons** (optional but recommended):
   - Open `generate-icons.html` in your browser
   - Icons will be automatically downloaded
   - Place them in the project folder

## Features Overview

### 🏠 Home
- View your test statistics
- Quick access to learning and testing
- Exam readiness indicator

### 📚 Learn
- Browse all 5 chapters from the official guide
- Click any chapter to read the content
- Mobile-optimized reading experience

### ✅ Test
- Click "Start New Test" to begin
- 24 questions, 45 minutes (official format)
- Get immediate feedback with explanations
- Review failed questions anytime

### 📊 Progress
- Track your exam readiness
- Review all failed questions
- View test history with scores

## Tips for Success

1. **Study First**: Read through the chapters in the Learn section
2. **Practice Regularly**: Take multiple practice tests
3. **Review Mistakes**: Check the Progress section to review failed questions
4. **Aim for Consistency**: The app tracks your readiness based on recent performance
5. **Target Score**: Aim for 85%+ consistently to be exam-ready

## Exam Readiness

The app considers you ready when:
- You've taken at least 3 recent tests
- Your average score is ≥85%
- You've passed at least 3 recent tests

## Installing on Mobile

### Android
1. Open in Chrome
2. Menu → "Add to Home screen"
3. App icon appears on home screen

### iOS
1. Open in Safari
2. Share button → "Add to Home Screen"
3. App icon appears on home screen

## Offline Use

After first load, the app works completely offline:
- All content is cached
- Your progress is saved locally
- No internet required

## Troubleshooting

**Icons not showing?**
- Generate icons using `generate-icons.html`
- Or the app works fine without them

**Service worker not working?**
- Make sure you're using a local server (not file://)
- Check browser console for errors

**Progress not saving?**
- Check browser settings (localStorage enabled)
- Try a different browser

## Need Help?

- Check the main README.md for detailed information
- All questions are based on the official Life in the UK guide
- The app format matches the official test (24 questions, 45 minutes, 75% pass)

