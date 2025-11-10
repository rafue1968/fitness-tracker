# Fitness Tracker — Next.js + Tailwind + Firebase

A minimal fitness-tracker web app scaffold using Next.js (React), Tailwind CSS, and Firebase (Auth + Firestore).
Designed as a learning project and MVP: auth, activity log (add/list/delete), and a simple dashboard.

## Features (MVP)
- Email/password authentication (Firebase Auth)
- Activity log saved to Firestore (add / list / delete)
- Tailwind CSS for UI
- Ready for Vercel deployment

## Prerequisites
- Node.js v18+ and npm
- Git
- A Firebase project (Auth + Firestore)
- (Optional) Vercel account for deployment

## Quick start (local)
1. Clone:
   ```bash
   git clone <your-repo-url>
   cd fitness-tracker
``

2. Install:
```bash
npm install
```

3. Create .env based on .env and add your Firebase config:

```ini
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

4. Run dev server:
```bash
npm run dev
```

5. Open http://localhost:3000


## Build & production
```bash
npm run build
npm start
```

## Recommended npm scripts (in package.json)
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```


## GitHub & Vercel (quick)
- Create a GitHub repo and push your project:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:<your-username>/<repo>.git
git push -u origin main
```
- On Vercel: Import the GitHub repi and set environment variables in Vercel dashboard (same keys as .env).

