# Project Clone - Streaming Platform

A modern streaming platform built with React, TypeScript, and Tailwind CSS.

## Setup Instructions

### Adding Header Video

To add a video background to the header:

1. Place your video file in the `public/videos/` directory
2. Name it `header-video.mp4` (or update the path in `src/components/Header.tsx`)
3. Recommended video specifications:
   - Format: MP4
   - Duration: 10-30 seconds (for looping)
   - Resolution: 1920x1080 or smaller
   - File size: Under 10MB for optimal loading
   - Aspect ratio: 16:9

### File Structure

```
public/
├── videos/
│   └── header-video.mp4  (place your video here)
└── vite.svg
src/
├── components/
│   ├── Header.tsx        (video integration already implemented)
│   └── ...
└── ...
```

### Development

```bash
npm install
npm run dev
```

### Video Integration

The header component is already configured to display a video background when the page is at the top. The video will:
- Auto-play and loop
- Be muted by default
- Show with 30% opacity
- Hide when the user scrolls down
- Have a gradient overlay for text readability

Simply add your `header-video.mp4` file to the `public/videos/` directory and it will automatically be displayed.