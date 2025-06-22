# sinopsisp

A professional and modern blog platform for movie and game synopses, reviews, and pop culture insights. Built with a focus on performance and a clean, Bloomberg-inspired design.

## 🚀 Features

- **Next.js 14**: Utilizes the App Router for modern, server-driven UI.
- **Dynamic Content**: Fetches live data directly from the [TMDB](https://www.themoviedb.org/) and [RAWG](https://rawg.io/) APIs.
- **Giscus Comments**: Integrated with [Giscus](https://giscus.app) for a comment system powered by GitHub Discussions.
- **Vercel Analytics**: Ready for performance monitoring and traffic insights.
- **Dark Mode**: Beautiful dark mode support with `next-themes`.
- **Fully Responsive**: Built with Tailwind CSS for a seamless experience on all devices.
- **Professional UI**: Uses [ShadCN UI](https://ui.shadcn.com/) for high-quality, accessible components.

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Data Source**: TMDB API & RAWG API
- **Comments**: Giscus
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## 🛠️ Getting Started

Follow these steps to get the project running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install Dependencies

This project uses `npm` for package management.

```bash
npm install
```

### 3. Set Up Environment Variables

This is the most crucial step. The application will not run without valid API keys.

Create a file named `.env.local` in the root of the project (at the same level as `package.json`). Then, add your secret keys to it.

**Important:** These variables are used on the server-side, so they should **NOT** have the `NEXT_PUBLIC_` prefix.

```env
# Get your key from https://www.themoviedb.org/settings/api
TMDB_API_KEY=your_tmdb_api_key_here

# Get your key from https://rawg.io/apidocs
RAWG_API_KEY=your_rawg_api_key_here

# Giscus Comments (Optional)
# See https://giscus.app for setup
NEXT_PUBLIC_GISCUS_REPO=your_github_username/your_repo_name
NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id
```

### 4. Run the Development Server

After setting up the environment variables, you need to restart the server to load them. It's recommended to clear the Next.js cache as well.

```bash
# Optional, but recommended: remove the cache
rm -rf .next

# Run the development server
npm run dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## 🚀 Deployment

The easiest way to deploy this application is with [Vercel](https://vercel.com).

1.  **Push to GitHub**: Push your finalized code to a GitHub repository.
2.  **Import Project**: On your Vercel dashboard, import the project from the GitHub repository.
3.  **Configure Environment Variables**: In the project settings on Vercel, go to "Environment Variables" and add the same keys you used in your `.env.local` file (`TMDB_API_KEY`, `RAWG_API_KEY`, etc.).
4.  **Deploy**: Click the "Deploy" button. Vercel will handle the rest.

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

- Email: hello@sinopsisp.vercel.app
- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@sinopsisp](https://twitter.com/sinopsisp)

---

Dibuat dengan ❤️ menggunakan Next.js dan teknologi modern.
