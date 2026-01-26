# ⚡ Next.js Portfolio - Tejas P R

A modern, minimalist, and highly customizable developer portfolio built with the latest web technologies. Features a clean design, smooth animations, and a playful "oneko" cat follower.

![Portfolio Preview](/public/meta/opengraph-image.png)

## ✨ Features

- **🎨 Modern Design**: Clean UI with a focus on typography and whitespace.
- **🌗 Dark/Light Mode**: Fully supported with system preference detection.
- **🐈 Oneko.js**: A cute cat that follows your cursor (interactive & fun!).
- **🛠 Config-Driven**: Easily customize content (Hero, Skills, Socials) via simple config files.
- **📱 Fully Responsive**: Looks great on mobile, tablet, and desktop.
- **🚀 High Performance**: Built on Next.js 15 for optimal speed and SEO.
- **🌊 Smooth Scrolling**: Integrated with `lenis` for a premium feel.
- **🧩 Radix UI**: Accessible and robust UI primitives.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Animation**: [CVA](https://cva.style/) & CSS Modules
- **Package Manager**: [Bun](https://bun.sh/)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) (recommended) or Node.js installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Tejas-pr/next_portfolio.git
   cd next_portfolio
   ```

2. **Install dependencies:**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the development server:**

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Customization

This portfolio is designed to be easily customized without digging deep into component code.

Navigate to the `config/` directory to update your information:

- **`config/Hero.tsx`**: Update your Name, Title, Description, Skills, Social Links, and Buttons.
- **`config/About.tsx`**: Modify the "About Me" section text.
- **`config/Resume.ts`**: Update the link to your Resume/CV.
- **`config/Meta.tsx`**: Configure SEO settings (Title, Description, Keywords).

## 🐱 The Cat (Oneko.js)

The playful cat animation is powered by [oneko.js](https://github.com/adryd325/oneko.js). It adds a touch of personality to the site!

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Built with ❤️ by [Tejas P R](https://github.com/Tejas-pr)
