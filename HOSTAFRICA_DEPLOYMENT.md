# HostAfrica Shared Hosting Deployment Guide

## 🎯 Overview
This guide walks through deploying the Pampiri landing page to HostAfrica shared hosting.

## 📋 Pre-Deployment Checklist

### 1. Environment Variables Setup
Since HostAfrica shared hosting doesn't support .env files like Vercel/Netlify, we need to embed the environment variables into the build.

**Current Environment Variables Needed:**
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN` 
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_FORMSPREE_FORM_ID`
- `VITE_WEB3FORMS_API_KEY` (optional)

### 2. Remove Testing Components
Before deployment, remove these temporary testing files:
- `src/components/EmailTester.tsx`
- `src/testEmailServices.ts`
- Email testing section from `src/pages/Index.tsx`

### 3. Production Build Configuration

## 🚀 Deployment Steps

### Step 1: Prepare Environment Variables
Create a production `.env.production` file or update the existing `.env`:

```bash
# Copy your current .env to .env.production
cp .env .env.production
```

### Step 2: Clean and Build
```bash
# Install dependencies (if not already done)
npm install

# Remove testing components (we'll do this next)
# ...

# Build for production
npm run build
```

### Step 3: Upload to HostAfrica
1. **Access your HostAfrica cPanel/File Manager**
2. **Navigate to your domain's public_html folder**
3. **Upload all contents from the `dist/` folder** (not the folder itself, just the contents)
4. **Ensure the following structure in public_html:**
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].js
   │   ├── index-[hash].css
   │   └── ...
   └── src/
       └── assets/
           ├── images/
           └── videos/
   ```

### Step 4: Configure Domain/Subdomain
- If using a subdomain (e.g., app.yourdomain.com), point it to the folder containing the files
- If using the main domain, ensure files are in the root public_html directory

### Step 5: Test Email Services
After deployment, test the email services to ensure they work in the production environment:
- EmailJS should work without issues
- Formspree should work without issues  
- Firebase should work (verify in browser console)

## ⚙️ HostAfrica-Specific Considerations

### File Upload Method
**Option 1: File Manager (Recommended for small sites)**
- Use HostAfrica's cPanel File Manager
- Upload the `dist` folder contents directly

**Option 2: FTP/SFTP**
- Use FileZilla or similar FTP client
- Upload to your domain's public_html directory

**Option 3: Git Deployment (if supported)**
- Some HostAfrica plans support Git deployment
- Check with HostAfrica support for availability

### Static File Serving
HostAfrica shared hosting serves static files automatically, so no server configuration needed for:
- HTML, CSS, JS files
- Images and assets
- Font files

### HTTPS/SSL
- HostAfrica typically provides free SSL certificates
- Ensure your site runs on HTTPS for security (required for Firebase)

## 🔧 Build Optimization for Shared Hosting

### Recommended Build Settings
Update `vite.config.ts` if needed:

```typescript
export default defineConfig(({ mode }) => ({
  base: "./", // Already set - good for shared hosting
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimize for shared hosting
    rollupOptions: {
      output: {
        manualChunks: undefined, // Single chunk for simplicity
      }
    }
  },
  // ... rest of config
}));
```

## 📊 Performance Considerations

### Asset Optimization
- Images are already optimized
- Consider compressing the build files if HostAfrica supports it
- Use browser caching (HostAfrica usually handles this automatically)

### CDN (Optional)
- HostAfrica may offer CDN services
- Consider using for better global performance

## 🐛 Troubleshooting Common Issues

### 1. Blank Page After Deployment
- Check browser console for errors
- Verify all asset paths are correct
- Ensure `base: "./"` is set in vite.config.ts

### 2. Firebase Connection Issues
- Verify all Firebase environment variables are correct
- Check browser network tab for failed requests
- Ensure domain is added to Firebase authorized domains

### 3. Email Services Not Working
- Test each service individually
- Check browser console for API errors
- Verify all API keys are correct and not exposed

### 4. Routing Issues (if using React Router)
Since this is a single-page app, you might need:
- `.htaccess` file for proper routing (if using subdirectories)
- Or ensure all routes work with hash routing

## 📞 HostAfrica Support
If you encounter hosting-specific issues:
- Contact HostAfrica support
- Mention you're deploying a React/Vite single-page application
- Ask about static file serving and any .htaccess requirements

## 🚨 Security Notes
- Never commit actual API keys to version control
- Use environment variables even in production builds
- Regularly rotate sensitive keys
- Monitor email service usage to prevent abuse

---

**Next Steps**: Remove testing components and run the production build!