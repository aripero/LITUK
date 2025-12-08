# Deployment Guide - Life in the UK Test Prep

## Best Options for Mobile Deployment

### Option 1: GitHub Pages (Recommended - Free & Easy)

**Steps:**
1. Create a GitHub account (if you don't have one)
2. Create a new repository (make it public or private)
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select the main branch and save
6. Your app will be live at: `https://yourusername.github.io/repository-name/`

**Advantages:**
- ✅ Free HTTPS (required for PWA)
- ✅ Service workers work properly
- ✅ Can be installed as an app
- ✅ Easy to update (just push changes)
- ✅ Shareable link for family

**Files to upload:**
- index.html
- app.js
- content.js
- questions.js
- styles.css
- manifest.json
- service-worker.js
- icon-192.png (if exists)
- icon-512.png (if exists)
- Life in the UK- A guide for new residents.pdf (optional - large file)

---

### Option 2: Netlify Drop (Easiest - Drag & Drop)

**Steps:**
1. Go to https://app.netlify.com/drop
2. Drag and drop your entire folder
3. Get instant HTTPS URL
4. Share the link with family

**Advantages:**
- ✅ Instant deployment
- ✅ Free HTTPS
- ✅ No account needed (but recommended)
- ✅ Service workers work
- ✅ Can be installed as PWA

---

### Option 3: Vercel (Also Easy)

**Steps:**
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository or drag & drop
4. Deploy instantly

**Advantages:**
- ✅ Free HTTPS
- ✅ Fast CDN
- ✅ Easy updates

---

### Option 4: Local Testing on Mobile

**For testing before deployment:**

1. **On your computer:**
   ```bash
   # In the project folder
   python3 -m http.server 8000
   # or
   npx serve .
   ```

2. **Find your computer's IP address:**
   - Mac: System Preferences → Network
   - Windows: `ipconfig` in command prompt

3. **On your phone (same WiFi):**
   - Open browser: `http://YOUR_IP_ADDRESS:8000`

**Note:** This is only for testing. Service workers may have limited functionality.

---

### Option 5: Direct File Access (Limited Functionality)

If you must use file sharing:

1. **Zip all files** (except PDF - it's large)
2. **Share via:**
   - Google Drive (download zip)
   - Dropbox
   - Email attachment
   - USB transfer

3. **On mobile device:**
   - Extract files
   - Use a local web server app like:
     - **Android:** "Simple HTTP Server" or "KSWeb"
     - **iOS:** "Server Auditor" or use Pythonista

**Limitations:**
- ⚠️ Service workers may not work
- ⚠️ PWA features limited
- ⚠️ More complex setup

---

## Recommended: GitHub Pages

**Quick Setup:**

```bash
# If you have git installed
cd "/Users/ariel/Development/Life in the UK"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

---

## Mobile Installation (PWA)

Once deployed with HTTPS:

1. **Open the app in mobile browser**
2. **Look for "Add to Home Screen" prompt**
3. **Or manually:**
   - **iOS Safari:** Share → Add to Home Screen
   - **Android Chrome:** Menu → Install App / Add to Home Screen

The app will then work like a native app!

---

## Notes

- The PDF file is large (~12MB). Consider hosting it separately or making it optional
- Service workers require HTTPS (except localhost)
- All JavaScript files must be served from the same origin
- Test the app on actual devices, not just emulators

