# Public Assets

Place static files here. They are served from the root `/` URL by Vite.

## Images used in the site

| File          | Used in     | Notes                                    |
| ------------- | ----------- | ---------------------------------------- |
| `dc-logo.png` | HeroSection | D&C monogram logo — drop your image here |
| `images/`     | General     | Place any other wedding photos here      |

## Usage in code

```jsx
// Root public folder — reference from "/"
<Image src="/dc-logo.png" />

// Images subfolder
<Image src="/images/couple.jpg" />
```

## Recommended sizes

| File                 | Recommended size                         |
| -------------------- | ---------------------------------------- |
| `dc-logo.png`        | 200×200 px, transparent background (PNG) |
| Hero / banner photos | 1920×1080 px min                         |
| Gallery photos       | 1200×900 px min                          |
