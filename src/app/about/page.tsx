import Image from 'next/image';

async function getGithubProfile(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) return null;
  return response.json();
}

export default async function AboutPage() {
  const githubProfile = await getGithubProfile('xfalzz');

  return (
    <main className="container max-w-4xl mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang sinopsisp</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-300">
          Blog sinopsis, review film, opini, dan insight budaya pop
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Selamat datang di <strong>sinopsisp</strong>, sebuah ruang digital yang didedikasikan untuk memberikan 
          insight mendalam tentang dunia film, game, dan budaya pop kontemporer.
        </p>

        <h2>Misi Kami</h2>
        <p>
          Kami berkomitmen untuk menyajikan konten berkualitas tinggi yang mencakup:
        </p>
        <ul>
          <li><strong>Sinopsis Film & Game</strong> - Ringkasan cerita yang informatif dan menarik</li>
          <li><strong>Review Mendalam</strong> - Analisis kritis dari berbagai aspek film dan game</li>
          <li><strong>Opini Budaya</strong> - Perspektif tentang tren dan fenomena pop culture</li>
          <li><strong>Insight Industri</strong> - Pembahasan tentang perkembangan dunia film</li>
        </ul>

        <h2>Konten Kami</h2>
        <p>
          Setiap artikel di sinopsisp ditulis dengan pendekatan editorial yang elegan, 
          terinspirasi dari standar kualitas media profesional seperti Bloomberg. 
          Kami fokus pada:
        </p>
        <ul>
          <li>Akurasi informasi dan data</li>
          <li>Perspektif yang beragam dan inklusif</li>
          <li>Bahasa yang mudah dipahami namun tetap sophisticated</li>
          <li>Desain yang nyaman dibaca di semua perangkat</li>
        </ul>

        <h2>Teknologi</h2>
        <p>
          Blog ini dibangun dengan teknologi modern:
        </p>
        <ul>
          <li><strong>Next.js 14</strong> - Framework React terbaru untuk performa optimal</li>
          <li><strong>Contentlayer</strong> - Sistem manajemen konten berbasis file</li>
          <li><strong>TMDB API</strong> - Data film terpercaya dan terupdate</li>
          <li><strong>Giscus</strong> - Sistem komentar berbasis GitHub</li>
          <li><strong>Vercel</strong> - Platform deployment yang handal</li>
        </ul>

        {githubProfile && (
          <>
            <h2 className="mt-12">Tentang Developer</h2>
            <div className="flex items-center gap-6 p-4 border rounded-lg">
              <Image
                src={githubProfile.avatar_url}
                alt={githubProfile.name || 'Developer Avatar'}
                width={96}
                height={96}
                className="rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold">{githubProfile.name}</h3>
                <p className="text-muted-foreground">@{githubProfile.login}</p>
                <p className="mt-2">{githubProfile.bio}</p>
                <div className="flex gap-4 mt-4">
                  <a href={githubProfile.html_url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                    GitHub Profile
                  </a>
                  <a href="https://nawfal.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                    Personal Website
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        <p>
          Terima kasih telah mengunjungi sinopsisp. Selamat membaca!
        </p>
      </div>
    </main>
  );
} 