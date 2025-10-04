# Deployment Guide for GitHub Pages

## 🚀 Step-by-Step Deployment Instructions

### 1. Initialize Git Repository
```bash
cd /home/abdul/portfolio/portfolio-clone
git init
git add .
git commit -m "Initial commit: Abdul Manaf F AI/ML Portfolio"
```

### 2. Create GitHub Repository

**Option A: Using GitHub CLI (if installed)**
```bash
gh repo create abdul-portfolio --public --source=. --remote=origin
git push -u origin main
```

**Option B: Using GitHub Website**
1. Go to https://github.com/new
2. Repository name: `abdul-portfolio`
3. Description: "AI/ML Engineer Portfolio - Abdul Manaf F"
4. Set to **Public**
5. Click "Create repository"

Then push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/abdul-portfolio.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR_USERNAME/abdul-portfolio`
2. Click on **Settings** tab
3. Click on **Pages** in the left sidebar
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. The GitHub Action will automatically deploy your site!

### 4. Wait for Deployment

- The GitHub Action will automatically run when you push
- Check the **Actions** tab to see the deployment progress
- Once completed (green checkmark), your site will be live!

### 5. Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/abdul-portfolio/
```

For example, if your GitHub username is `abdul756`:
```
https://abdul756.github.io/abdul-portfolio/
```

## 🔄 Updating Your Portfolio

Whenever you make changes:
```bash
git add .
git commit -m "Description of your changes"
git push
```

The GitHub Action will automatically rebuild and redeploy your site!

## ✅ What's Already Configured

- ✅ Next.js configured for static export
- ✅ GitHub Actions workflow set up
- ✅ Images optimization disabled for static export
- ✅ Base path set to `/abdul-portfolio`
- ✅ .nojekyll file created

## 🎯 Repository Structure

Your portfolio includes:
- 🎨 3D effects and animations
- 🧠 Neural network background
- 💼 All 6 production projects from Bobble AI
- 📚 Publications and patent information
- 📧 Contact information and social links
- 🏆 Certifications and achievements

## 📝 Notes

- First deployment may take 2-5 minutes
- Subsequent deployments are faster
- All changes pushed to `main` branch will auto-deploy
- Check the Actions tab for deployment status

## 🆘 Troubleshooting

If deployment fails:
1. Check the **Actions** tab for error messages
2. Ensure all dependencies are in `package.json`
3. Verify the workflow file is in `.github/workflows/deploy.yml`

## 🌟 Your Portfolio Features

- **Name**: Abdul Manaf F
- **Title**: Software Engineer II (AI Domain)
- **Experience**: 3+ years at Bobble AI
- **Projects**: 6 production AI systems
- **Publications**: 6+ papers, 80+ citations
- **Patent**: 1 filed patent
