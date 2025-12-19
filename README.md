# Markdown Blog

A modern, responsive blog built with Next.js and Markdown. Features a clean UI, dark/light theme switching, and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwind-css)

## ✨ Features

- 📝 **Markdown-powered** - Write posts in Markdown with frontmatter metadata
- 🎨 **Theme Switching** - Seamless light/dark mode with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design with hamburger menu on small screens
- ⚡ **Fast & Optimized** - Built on Next.js 16 with static generation
- 🎭 **Smooth Animations** - Custom scale-bounce animation and theme transitions
- 🧩 **Component-based** - Reusable UI components with Radix UI primitives
- 🎯 **Type-safe** - Full TypeScript support

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown**: [remark](https://github.com/remarkjs/remark) + [gray-matter](https://github.com/jonschlinkert/gray-matter)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mr-BlackHat-lab/MarkDown-Blog 
   cd markdownblog
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
markdownblog/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog listing page
│   │   ├── contact/           # Contact page
│   │   ├── posts/[slug]/      # Dynamic post pages
│   │   ├── globals.css        # Global styles & theme variables
│   │   ├── layout.tsx         # Root layout with Navbar/Footer
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ThemeToggle.tsx
│   ├── lib/                   # Utilities
│   │   ├── posts.ts           # Markdown parsing logic
│   │   └── utils.ts           # Helper functions
│   └── posts/                 # Markdown blog posts
│       ├── first-post.md
│       ├── react-hooks-explained.md
│       └── ...
├── public/                    # Static assets
├── package.json
└── README.md
```

## 📝 Writing Posts

Create `.md` files in `src/posts/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-12-19"
author: "Your Name"
description: "A brief description of your post"
---

# Your Content Here

Write your post content in Markdown...
```

## 🎨 Theme System

The blog uses CSS variables defined in `globals.css`:

- **Light theme**: Default (`:root`)
- **Dark theme**: Applied when `.dark` class is on `<html>`
- **System preference**: Respects OS theme via `prefers-color-scheme`

Toggle themes with the sun/moon button in the navbar.

## 🛠️ Development Commands

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 🎯 Customization

### Colors

Edit theme variables in `src/app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... more colors */
}
```

### Navbar Links

Edit `src/components/Navbar.tsx` to add/remove navigation items.

### Footer Social Links

Update `src/components/Footer.tsx` with your social media URLs.

### Animations

Modify keyframes in `src/app/globals.css`:

```css
@keyframes scale-bounce {
  /* Edit animation here */
}
```

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mr-BlackHat-labs**

- GitHub: [@Mr-BlackHat-lab](https://github.com/Mr-BlackHat-lab)
- Facebook: [parahalad](https://facebook.com/parahalad)
- Instagram: [@\_prahalad_singh](https://instagram.com/_prahalad_singh/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)

---

Made with ❤️ by Mr-BlackHat-labs
