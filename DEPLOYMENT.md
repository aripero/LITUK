# Deployment Guide - Life in the UK Test Prep

## 🚀 Current Deployment: GitHub Pages

**Repository:** `aripero/LITUK`  
**Live URL:** `https://aripero.github.io/LITUK/`

### ✅ Setup Complete

Your code is already pushed to GitHub at: `https://github.com/aripero/LITUK`

### 📋 Enable GitHub Pages (One-Time Setup)

**Steps to enable GitHub Pages:**

1. **Go to your repository settings:**
   - Visit: https://github.com/aripero/LITUK/settings/pages
   - Or: Go to your repo → Click "Settings" tab → Click "Pages" in left sidebar

2. **Configure the source:**
   - Under "Source" section:
     - **Branch:** Select `main`
     - **Folder:** Select `/ (root)`
   - Click **"Save"** button

3. **Wait for deployment:**
   - GitHub will build and deploy your site (usually takes 1-2 minutes)
   - You'll see a green checkmark when it's ready
   - A message will appear: "Your site is live at https://aripero.github.io/LITUK/"

4. **Access your app:**
   - Open: https://aripero.github.io/LITUK/
   - Share this link with family members

### 🔄 Updating Your App

After making changes to your code:

```bash
cd "/Users/ariel/Development/Life in the UK"
git add .
git commit -m "Your update description"
git push origin main
```

GitHub Pages will automatically rebuild and deploy (usually within 1-2 minutes). Your changes will be live at the same URL.

### ✅ Advantages of GitHub Pages

- ✅ Free HTTPS (required for PWA)
- ✅ Service workers work properly
- ✅ Can be installed as an app on mobile devices
- ✅ Easy to update (just push changes)
- ✅ Shareable link for family
- ✅ Automatic deployments on every push

### 📱 Mobile Installation (PWA)

Once your site is live at `https://aripero.github.io/LITUK/`:

1. **Open the app in mobile browser** (Chrome on Android, Safari on iOS)
2. **Look for "Add to Home Screen" prompt** (appears automatically)
3. **Or manually:**
   - **iOS Safari:** Share button → Add to Home Screen
   - **Android Chrome:** Menu (⋮) → Install App / Add to Home Screen

The app will then work like a native app with offline support!

---

## Alternative Deployment Options

### Option 2: Netlify Drop (Easiest - Drag & Drop)

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

## 📝 Notes

- The PDF file (~3.2MB) is included in the repository and will be available at the deployed URL
- Service workers require HTTPS (which GitHub Pages provides automatically)
- All JavaScript files must be served from the same origin (GitHub Pages handles this)
- Test the app on actual devices, not just emulators
- The repository is currently **public** - your code is visible to anyone (but that's fine for this type of app)

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


