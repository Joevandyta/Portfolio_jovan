---
name: "Jovan Portfolio Website"
description: "Development guide for a simple single-page portfolio website based on React 18 + Javascript + Vite"
category: "Frontend"
author: "Jovan"
tags: ["react", "javascript", "vite", "tailwindcss", "portfolio"]
lastUpdated: "2026-05-03"
---

# Jovan Portfolio Website Development Guide

## Project Overview

A simple single-page portfolio website for Jovan, a mobile developer. Built with React 18 + JavaScript + Vite + Tailwind CSS v4.

## Tech Stack

- **Frontend Framework**: React 18 + JavaScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Utilities**: clsx + tailwind-merge
- **Note**: Dont generate any image/illustration. Just use placeholder image from Unsplash.
## Project Structure

```
my-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/       # Reusable components (Navbar, SectionHeader, dll)
│   ├── App.jsx           # Main page — semua section ada di sini
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles + Tailwind config
├── index.html
├── vite.config.js
└── package.json
```

## Installation

```bash
# 1. Buat project
npm create vite@latest my-portfolio -- --template react

# 2. Masuk folder
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Install Tailwind CSS v4
npm install @tailwindcss/vite tailwindcss

# 5. Install package tambahan
npm install framer-motion lucide-react clsx tailwind-merge

# 6. Jalankan dev server
npm run dev
```

## Konfigurasi

### vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### src/main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## Struktur App.jsx

Semua section portfolio ada di `App.jsx` — tidak perlu routing karena ini single-page:

```
App.jsx
├── DATA (objek berisi semua konten: nama, skills, projects, contact)
├── Navbar
├── SectionHeader
└── App() — export default
    ├── <section id="home">     → Hero
    ├── <section id="about">    → About
    ├── <section id="skills">   → Tech Stack
    ├── <section id="projects"> → Projects
    ├── <section id="contact">  → Contact
    └── <footer>
```

## Icon — lucide-react

Selalu cek nama icon yang tersedia di versi yang terinstall:
```bash
# Cek versi
npm list lucide-react

# Kalau ada error "does not provide an export named X"
# downgrade ke versi stabil
npm install lucide-react@0.460.0
```

Icon yang dipakai di project ini:
```jsx
import {
  Github, Linkedin, Mail, Moon, Sun,
  ExternalLink, Code2, Smartphone, Layout,
  Layers, ChevronRight, Send, Download
} from 'lucide-react'
```

## Dark Mode

This project uses a fixed dark theme. No light/dark mode toggle is required. Dark mode is enabled by default via the `dark` class on `<html>` or by using dark-themed colors as base.

## Color Theme

The theme is dominated by dark colors (near black/dark grey) with green accents (e.g., Emerald or Lime).

## Common Issues

### Layar putih saat run
1. Cek console browser (F12) untuk error
2. Pastikan `index.css` di-import di `main.jsx`
3. Hapus cache Vite: `rm -rf node_modules/.vite && npm run dev`
4. Reinstall semua: `rm -rf node_modules && npm install`

### Error "does not provide an export named" dari lucide-react
Nama icon berubah di versi baru. Solusi paling cepat:
```bash
npm install lucide-react@0.460.0
```

## Reference

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/icons/)