# How to Add Your Photo to the Portfolio

## Step-by-Step Guide

### Step 1: Prepare Your Photo
1. Choose a professional photo (headshot or full body)
2. Recommended size: **800x800 pixels** (square format works best)
3. Format: JPG or PNG
4. File size: Keep under 500KB for fast loading

### Step 2: Add Photo to Project

#### Option A: Using the `public` folder (Recommended)
1. Create a folder: `public/images/`
2. Put your photo there, for example: `public/images/naol-photo.jpg`
3. The path in code will be: `/images/naol-photo.jpg`

#### Option B: Using the `src` folder
1. Create a folder: `src/assets/images/`
2. Put your photo there
3. Import it in the component (see examples below)

### Step 3: Enable Photo in Hero Section (Landing Page)

Open `src/components/Hero.js` and find this section:

```javascript
{/* YOUR PHOTO HERE - Option 1: Uncomment this to use your photo */}
{/* 
<div className="hero-photo-container">
  <img 
    src="/images/your-photo.jpg" 
    alt="Naol Daniel" 
    className="hero-photo"
  />
</div>
*/}
```

**Uncomment it and update the path:**

```javascript
{/* YOUR PHOTO HERE - Option 1: Uncomment this to use your photo */}
<div className="hero-photo-container">
  <img 
    src="/images/naol-photo.jpg"  {/* ← Change this to your photo name */}
    alt="Naol Daniel" 
    className="hero-photo"
  />
</div>
```

**Optional:** If you want ONLY your photo (no animated circle), comment out or delete this:
```javascript
{/* Animated morphing circle with gradient - Option 2: Keep this for abstract design */}
<div className="hero-circle"></div>  {/* ← Delete or comment this line */}
```

### Step 4: Enable Photo in About Section (Optional)

Open `src/components/About.js` and find:

```javascript
{/* YOUR PHOTO HERE - Option 1: Uncomment this to use your photo */}
{/* 
<div className="about-photo-container">
  <img 
    src="/images/your-photo.jpg" 
    alt="Naol Daniel" 
    className="about-photo"
  />
</div>
*/}
```

**Uncomment and update:**

```javascript
<div className="about-photo-container">
  <img 
    src="/images/naol-photo.jpg"  {/* ← Your photo name */}
    alt="Naol Daniel" 
    className="about-photo"
  />
</div>
```

### Step 5: Choose Your Style

You have 3 options:

#### Option 1: Photo + Animated Circle (Both)
- Keep both the photo container AND the circle
- They will overlap for a cool effect

#### Option 2: Photo Only (Clean Look)
- Uncomment the photo container
- Delete or comment out the `.hero-circle` or `.about-image-bg` div

#### Option 3: Animated Shape Only (Current Design)
- Keep everything as is
- Don't uncomment the photo sections

## Example File Structure

```
portfolio/
├── public/
│   ├── images/              ← Create this folder
│   │   ├── naol-photo.jpg   ← Put your photo here
│   │   └── profile.jpg      ← Or any name you want
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js          ← Edit this
│   │   ├── About.js         ← Edit this
│   │   └── ...
```

## Using Import Method (Alternative)

If you prefer to import the image:

1. Put photo in `src/assets/images/naol-photo.jpg`

2. At the top of `Hero.js`, add:
```javascript
import profilePhoto from '../assets/images/naol-photo.jpg';
```

3. Use it like this:
```javascript
<img 
  src={profilePhoto} 
  alt="Naol Daniel" 
  className="hero-photo"
/>
```

## Tips for Best Results

✅ **Use high-quality photos** - Clear, well-lit, professional
✅ **Square format** - 1:1 ratio (800x800, 1000x1000, etc.)
✅ **Optimize file size** - Use tools like TinyPNG to compress
✅ **Professional background** - Solid color or blurred background works best
✅ **Good lighting** - Natural light or professional lighting
✅ **Centered face** - Make sure your face is centered in the frame

## Troubleshooting

**Photo not showing?**
- Check the file path is correct
- Make sure the file is in the `public/images/` folder
- Check the file name matches exactly (case-sensitive)
- Try refreshing the browser (Ctrl + F5)

**Photo looks stretched?**
- The CSS uses `object-fit: cover` which should prevent stretching
- Make sure your photo is square or close to square ratio

**Photo is too large (slow loading)?**
- Compress your image using tools like:
  - TinyPNG (https://tinypng.com/)
  - Squoosh (https://squoosh.app/)
  - Photoshop "Save for Web"

## Need Help?

If you have issues, check:
1. File path is correct
2. File name matches exactly
3. Photo is in the right folder
4. You saved the file after editing
5. You refreshed the browser

---

Made with ❤️ for Naol Daniel's Portfolio
