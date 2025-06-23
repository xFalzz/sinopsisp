# Sinopsisp

<div align="center">

![Sinopsisp Logo](https://img.shields.io/badge/Sinopsisp-Film%20%26%20Game%20Blog-blue?style=for-the-badge&logo=next.js)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**Professional Film & Game Analysis Blog**

*A modern, elegant blog dedicated to in-depth film reviews, game analysis, and pop culture insights.*

[Live Demo](https://sinopsisp.vercel.app) • [Instagram](https://www.instagram.com/sinopsisp/) • [Report Bug](https://github.com/xFalzz/sinopsisp/issues)

</div>

---

## 🎬 About Sinopsisp

Sinopsisp is a premium blog platform that combines sophisticated design with comprehensive content analysis. Built for film enthusiasts and gamers who appreciate thoughtful, well-researched reviews and insights. Our platform features real-time data integration from TMDB and RAWG APIs, ensuring you always have access to the latest information about movies and games.

### ✨ Key Features

- **🎨 Premium Design**: Clean, modern interface inspired by professional media outlets like Bloomberg
- **⚡ Lightning Fast**: Built with Next.js 14 and App Router for instant navigation
- **📱 Fully Responsive**: Perfect display across all devices from desktop to mobile
- **🌙 Dark Mode**: Eye-friendly dark theme for comfortable reading
- **💬 GitHub Comments**: Giscus-powered comment system integrated with GitHub Discussions
- **🔍 Advanced Search**: Real-time search functionality with debounced input
- **📊 Real-time Data**: Live integration with TMDB and RAWG APIs
- **📈 SEO Optimized**: Comprehensive metadata configuration for search engine visibility
- **🎯 Social Sharing**: Built-in social media sharing capabilities
- **📱 Progressive Web App**: Fast, reliable, and engaging user experience

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)** - Beautiful, accessible components

### APIs & Data
- **[TMDB API](https://www.themoviedb.org/documentation/api)** - Movie and TV show data
- **[RAWG API](https://rawg.io/apidocs)** - Video game database
- **[Giscus](https://giscus.app/)** - GitHub Discussions-based comments

### Deployment & Analytics
- **[Vercel](https://vercel.com/)** - Hosting and deployment platform
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring
- **[Speed Insights](https://vercel.com/docs/speed-insights)** - Core Web Vitals tracking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/xFalzz/sinopsisp.git
   cd sinopsisp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys to `.env.local`:
   ```env
   TMDB_API_KEY=your_tmdb_api_key_here
   RAWG_API_KEY=your_rawg_api_key_here
   GISCUS_REPO=your_github_repo_here
   GISCUS_CATEGORY=Announcements
   GISCUS_CATEGORY_ID=your_category_id_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 📁 Project Structure

```
sinopsisp/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── movies/         # Movie-related pages
│   │   ├── games/          # Game-related pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   │   ├── ui/            # ShadCN UI components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   └── ...
│   ├── lib/               # Utility functions and configurations
│   │   ├── tmdb.ts        # TMDB API utilities
│   │   ├── rawg.ts        # RAWG API utilities
│   │   └── utils.ts       # Helper functions
│   └── hooks/             # Custom React hooks
├── public/                # Static assets
└── ...
```

## 🎯 Features in Detail

### Real-time Data Integration
- **TMDB Integration**: Live movie and TV show data with posters, ratings, and cast information
- **RAWG Integration**: Comprehensive game database with screenshots, ratings, and release dates
- **Caching Strategy**: Optimized data fetching with proper caching mechanisms

### User Experience
- **Smooth Animations**: Framer Motion-powered page transitions and micro-interactions
- **Loading States**: Skeleton loaders and progressive loading for better perceived performance
- **Search Functionality**: Debounced search with real-time results
- **Social Sharing**: One-click sharing to major social media platforms

### Performance Optimizations
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for optimal performance
- **CDN Integration**: Global content delivery for fast loading worldwide

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all linting checks pass

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TMDB** for providing comprehensive movie and TV show data
- **RAWG** for their extensive video game database
- **Vercel** for hosting and deployment services
- **ShadCN** for the beautiful UI components
- **Next.js Team** for the amazing framework

## 📞 Contact & Support

- **Instagram**: [@sinopsisp](https://www.instagram.com/sinopsisp/)
- **Developer**: [Nawfal (xFalzz)](https://github.com/xFalzz)
- **Issues**: [GitHub Issues](https://github.com/xFalzz/sinopsisp/issues)
- **Live Site**: [sinopsisp.vercel.app](https://sinopsisp.vercel.app)

---

<div align="center">

**Made with ❤️ by [Nawfal](https://github.com/xFalzz)**

[![GitHub stars](https://img.shields.io/github/stars/xFalzz/sinopsisp?style=social)](https://github.com/xFalzz/sinopsisp/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/xFalzz/sinopsisp?style=social)](https://github.com/xFalzz/sinopsisp/network/members)
[![GitHub issues](https://img.shields.io/github/issues/xFalzz/sinopsisp)](https://github.com/xFalzz/sinopsisp/issues)

</div>
