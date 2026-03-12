# Web Performance & Image Optimization Guide

This guide provides a workflow for optimizing high-resolution assets and ensuring fast page loads in modern web applications.

## 1. Automated Image Optimization (PowerShell)

Use this script to bulk-compress images, convert heavy PNGs to JPEGs, and resize them for the web.

### The script: `optimize-images.ps1`

```powershell
Add-Type -AssemblyName System.Drawing

function Optimize-Image {
    param(
        [Parameter(Mandatory=$true)]
        [string]$imgPath,
        [Parameter(Mandatory=$true)]
        [string]$outPath,
        [int]$newWidth = 1200,
        [int]$quality = 85
    )
    
    if (!(Test-Path $imgPath)) {
        Write-Warning "File not found: $imgPath"
        return
    }

    $img = [System.Drawing.Image]::FromFile($imgPath)
    
    # Calculate height to maintain aspect ratio
    if ($newWidth -gt $img.Width) { $newWidth = $img.Width }
    $newHeight = [int]($img.Height * ($newWidth / $img.Width))

    # Create new canvas
    $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Set high quality scaling
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $g.DrawImage($img, 0, 0, $newWidth, $newHeight)

    $img.Dispose()
    $g.Dispose()

    # Setup JPEG Encoder
    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | 
               Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)

    $bmp.Save($outPath, $encoder, $params)
    $bmp.Dispose()
    
    Write-Host "Optimized: $imgPath -> $outPath ($( (Get-Item $outPath).Length / 1kb ) KB)" -ForegroundColor Green
}

# --- USAGE EXAMPLES ---
# Update the path below to your project's assets folder
$assetsDir = "$PSScriptRoot\src\assets"

# Example: Convert heavy PNGs to optimized web JPEGs
# Optimize-Image "$assetsDir\screenshot.png" "$assetsDir\screenshot_web.jpg" 800

# Example: Compress a massive 10MB JPEG
# Optimize-Image "$assetsDir\background.jpg" "$assetsDir\background_optimized.jpg" 1920 80
```

### How to use:
1. Save the code above as `optimize-images.ps1` in your project root.
2. Open PowerShell as Administrator (if needed for execution policy).
3. Run: `powershell -ExecutionPolicy Bypass -File .\optimize-images.ps1`

---

## 2. Browser-Side Optimization Best Practices

Once your images are compressed, use these attributes in your HTML/React components to optimize how the browser handles them.

### A. Critical "Above the Fold" Images (Hero)
For images that the user sees immediately (Logos, Hero Mockups), you want to tell the browser to prioritize them over everything else.

```tsx
<img 
  src={heroAsset} 
  alt="Main Product" 
  fetchPriority="high"  // Tells browser to download this ASAP
  decoding="sync"       // Renders synchronously to avoid flicker
  loading="eager"      // Default, but explicit (never lazy-load LCP images)
/>
```

### B. "Below the Fold" Images (Features, How it Works)
For images that appear after the user scrolls, use lazy loading to keep the initial page load tiny.

```tsx
<img 
  src={featureAsset} 
  alt="Feature Info" 
  loading="lazy"        // Only downloads when near the viewport
  decoding="async"      // Decodes in background to prevent UI jank
/>
```

### C. Layout Stability (Prevent Jumping)
Always define an `aspect-ratio` or fixed dimensions on image containers. This prevents the "jumping" effect (Layout Shift) when images load.

```tsx
<div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-900">
  <img src={...} className="w-full h-full object-cover" />
</div>
```

### D. File Formats Summary
| Format | Best For | Why? |
| :--- | :--- | :--- |
| **AVIF** | Hero images / backgrounds | Best compression available today. |
| **WebP** | Product shots / feature images | Great balance of quality and size. |
| **JPG** | Complex photos | Standard compatibility; use for photos. |
| **PNG** | Icons / Logos | Use only when transparency is strictly required. |
