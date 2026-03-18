# Souhail Aouzi - Portfolio

A modern, responsive developer portfolio built with Next.js 14 and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7)

---

## Overview

Personal portfolio website showcasing my projects, skills, and education as a Full Stack Developer & DevOps Engineer.

### Features

- **Responsive Design** - Optimized for all screen sizes
- **Animated UI** - Smooth scroll-based animations and CSS transitions
- **Contact Form** - Integrated with Netlify Forms
- **Static Export** - Pre-rendered for fast loading and easy deployment

---

## Tech Stack

| Category   | Technologies                        |
| ---------- | ----------------------------------- |
| Framework  | Next.js 14 (App Router)             |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS                        |
| Icons      | React Icons                         |
| Fonts      | Inter, Fira Code (Google Fonts)     |
| Deployment | Netlify (Static Export)             |

---

## Project Structure

```
src/
├── app/                          # Next.js app router
│   ├── layout.tsx
│   ├── page.tsx
│   └── thank-you/page.tsx
├── components/
│   ├── layout/
│   │   └── navbar/               # Navigation bar
│   └── sections/
│       ├── hero/                 # Hero section
│       ├── formation/            # Education timeline
│       ├── skills/               # Skills showcase
│       ├── projects/             # Projects grid
│       ├── contact/              # Contact form
│       └── thank-you/            # Form confirmation
├── data/
│   ├── formations/               # Education data
│   ├── navigation/               # Nav links & social links
│   ├── projects/                 # Projects data
│   └── skills/                   # Skills data
└── lib/
    └── fonts/                    # Font configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Souhailaouzi/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
# Create a production build
npm run build

# The static output will be in the /out directory
```

---

## Deployment

This project is configured for **Netlify** with static export (`output: 'export'`). Push to the main branch to trigger automatic deployment.

---

## Author

**Souhail Aouzi** - Computer Engineering Student

- [GitHub](https://github.com/Souhailaouzi)
- [LinkedIn](https://linkedin.com/in/souhail-aouzi-1949sou)
- [Email](mailto:souhailaouzi1949@gmail.com)
