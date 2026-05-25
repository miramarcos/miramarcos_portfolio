# Marcos — Full-Stack Software Engineer Portfolio

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=61DAFB&labelColor=20232A)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white&labelColor=20232A)
![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white&labelColor=20232A)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white&labelColor=20232A)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white&labelColor=20232A)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

A premium, production-ready developer portfolio built with modern tooling and best practices.

---

## Preview

> _Screenshot / live demo coming soon_

---

## Features

- **Smooth scrolling** powered by Lenis
- **Immersive Hero** with animated gradient orbs and mouse parallax
- **Scroll-triggered animations** with Framer Motion
- **Parallax effects** on multiple sections
- **Responsive design** — mobile-first, pixel-perfect on all screen sizes
- **Contact form** with EmailJS integration and validation
- **TypeScript throughout** — fully typed with strict mode
- **Performance optimized** — lazy loading, code splitting, optimized builds
- **SEO ready** — meta tags, Open Graph, Twitter Card
- **Accessible** — semantic HTML, keyboard navigable

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| TypeScript | 5.5 | Type safety |
| Vite | 5.3 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations & transitions |
| @studio-freight/lenis | 1.0 | Smooth scrolling |
| Lucide React | 0.417 | Icon library |
| React Hook Form | 7.52 | Form management |
| @emailjs/browser | 4.4 | Contact form email delivery |
| react-parallax-tilt | 1.7 | Tilt card effects |
| react-intersection-observer | 9.13 | Scroll visibility detection |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/miramarcos/miramarcos-portfolio.git
cd miramarcos-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your EmailJS credentials
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Output is in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Deploy to Vercel

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy — Vercel auto-detects Vite config

---

## Project Structure

```
miramarcos-portfolio/
├── public/
│   └── resume/           # Place resume.pdf here
├── src/
│   ├── components/
│   │   ├── animations/   # Reusable animation wrappers
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Page sections (Hero, About, etc.)
│   │   └── ui/           # Atomic UI components
│   ├── data/             # Static content data
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── types/            # TypeScript interfaces
│   └── utils/            # Utility functions
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID | Yes |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID | Yes |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key | Yes |

To set up EmailJS:
1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key to `.env`

---

## Resume

Place your resume PDF at `public/resume/resume.pdf` to enable the download button.

---

## Contact

- **Email**: mirakrismarcos@gmail.com
- **GitHub**: [github.com/miramarcos](https://github.com/miramarcos)
- **LinkedIn**: [linkedin.com/in/miramarcos](https://linkedin.com/in/miramarcos)

---

## License

MIT © Marcos
