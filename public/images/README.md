# Image Repository

This directory contains all the images used in your portfolio. The structure is organized as follows:

## Directory Structure

```
public/images/
├── gallery/          # Main gallery images (high resolution)
├── projects/         # Project-specific images
├── thumbnails/       # Thumbnail versions for faster loading
└── README.md         # This file
```

## Image Guidelines

### Gallery Images (`/gallery/`)
- **Format**: JPG, PNG, or WebP
- **Resolution**: Minimum 1200px width for high-quality display
- **Aspect Ratio**: Various ratios supported (16:9, 4:3, 1:1, etc.)
- **File Size**: Optimize for web (under 2MB recommended)
- **Naming**: Use descriptive, kebab-case names (e.g., `greed-typography.jpg`)

### Project Images (`/projects/`)
- **Format**: JPG, PNG, or WebP
- **Resolution**: 1920px width recommended for project heroes
- **Use**: Specific project detail images, mockups, wireframes

### Thumbnails (`/thumbnails/`)
- **Format**: JPG or WebP
- **Resolution**: 400px width maximum
- **Use**: Fast loading preview images
- **Naming**: Add `-thumb` suffix to original name

## Adding New Images

1. **Place your images** in the appropriate directory
2. **Update the configuration** in `/config/images.ts`
3. **Add image metadata** including:
   - Unique ID
   - File path
   - Alt text (for accessibility)
   - Title and description
   - Category
   - Dimensions (optional)

## Example Configuration

```typescript
{
  id: 'your-project-1',
  src: '/images/gallery/your-project.jpg',
  alt: 'Your Project Description',
  title: 'Your Project Title',
  description: 'Detailed description of the project',
  category: 'gallery',
  width: 1200,
  height: 800
}
```

## Optimization Tips

- Use **WebP format** when possible for better compression
- **Compress images** before adding (tools: TinyPNG, Squoosh, ImageOptim)
- Create **multiple sizes** for responsive loading
- Use **descriptive alt text** for accessibility
- Keep **file names** descriptive and web-friendly

## Current Images

Based on the images you've shown, you should add:

1. `greed-typography.jpg` - GREED typography with snake imagery
2. `urban-tactical.jpg` - Urban scene with tactical figure
3. `ninjas-website.jpg` - NINJAS brand website design
4. `mobile-wireframes.jpg` - Mobile UX wireframes and mockups
5. `ai-interface.jpg` - AI interface with gradient backgrounds
6. `collective-mobile.jpg` - The Collective mobile and desktop designs
7. `space-helmet.jpg` - Detailed space helmet photography

Remember to update `/config/images.ts` after adding new images!
