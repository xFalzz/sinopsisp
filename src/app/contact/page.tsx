'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Pesan telah dikirim! (Demo mode)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="container max-w-4xl mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-300">
          Punya pertanyaan atau saran? Kami siap membantu!
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <a href="mailto:nawfalirfan005@gmail.com" className="text-neutral-600 dark:text-neutral-300 hover:underline">
                nawfalirfan005@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-black" />
            </div>
            <div>
              <div className="font-semibold">GitHub</div>
              <a href="https://github.com/xFalzz" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-300 hover:underline">
                @xFalzz
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-pink rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <div>
              <div className="font-semibold">Instagram</div>
              <a href="https://www.instagram.com/sinopsisp/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-300 hover:underline">
                @sinopsisp
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <h3 className="font-semibold mb-2">Jam Operasional</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Senin - Kamis: 09:00 - 17:00 WIB<br />
              Jumat - Minggu: Tutup
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-4">Kirim Pesan</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent dark:bg-neutral-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent dark:bg-neutral-800"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent dark:bg-neutral-800"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent dark:bg-neutral-800 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-orange text-black px-6 py-3 rounded-lg font-semibold hover:bg-accent-orange/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 