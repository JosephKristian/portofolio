// src/pages/HomePage.jsx
import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';

const WHATSAPP_NUMBER = '+6285156677092';

export default function HomePage() {
  const { isDark, toggleDarkMode } = useDarkMode();

  // fungsi buat generate url WA dengan pesan sesuai layanan
  const sendWhatsapp = (serviceTitle) => {
    // contoh pesan
    const message = `Halo, saya tertarik dengan layanan *${serviceTitle}* yang Anda tawarkan. Mohon informasi lebih lanjut dan konsultasi gratis. Terima kasih!`;
    const urlMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${urlMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans transition-colors duration-500 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-400 transition"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
        Fullstack Developer (Spesialis Front End)
      </h1>
      <p className="text-lg text-center mb-10 max-w-xl mx-auto">
        Profesional dalam membangun{' '}
        <strong>website, aplikasi web & mobile</strong> dengan{' '}
        <strong>tampilan menarik</strong> dan{' '}
        <strong>fungsionalitas backend optimal</strong>.
      </p>

      <section className="space-y-8">
        <ServiceCard
          title="💍 Undangan Nikahan Digital"
          description={[
            'Desain elegan & custom',
            'Akses via link (praktis & hemat)',
            'Fitur: galeri, RSVP, lokasi, musik',
          ]}
          price="Mulai Rp75.000"
          onConsult={() => sendWhatsapp('Undangan Nikahan Digital')}
        />

        <ServiceCard
          title="🌐 Website Company Profile"
          description={[
            'Desain profesional, mobile-friendly',
            'Cocok untuk UMKM, jasa, toko online',
          ]}
          price="Harga promo mulai Rp500.000"
          onConsult={() => sendWhatsapp('Website Company Profile')}
        />

        <ServiceCard
          title="🧩 Pembuatan Aplikasi Web & Mobile"
          description={[
            'Cocok untuk bisnis, startup, skripsi, dan keperluan internal',
            'Dibuat dengan teknologi modern (Laravel, React, Flutter)',
            'Bisa terintegrasi dengan database & API',
            'Termasuk dokumentasi & support',
          ]}
          onConsult={() => sendWhatsapp('Pembuatan Aplikasi Web & Mobile')}
        />

        <ServiceCard
          title="🎓 Pembuatan Aplikasi untuk Skripsi"
          description={[
            'Web & Mobile App + laporan Bab 1–5',
            'Revisi & bimbingan online fleksibel',
          ]}
          onConsult={() => sendWhatsapp('Pembuatan Aplikasi untuk Skripsi')}
        />

        <ServiceCard
          title="🚀 Kursus Pemrograman Web"
          description={[
            'Belajar dari nol sampai mahir',
            'Materi: HTML, CSS, JS, Laravel, React, dll',
            'Bantu tugas & proyek kuliah',
          ]}
          onConsult={() => sendWhatsapp('Kursus Pemrograman Web')}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          🔧 Teknologi yang Dikuasai
        </h2>
        <ul className="list-disc pl-6 space-y-1 max-w-xl mx-auto">
          <li>
            <strong>Front End:</strong> HTML, CSS, JavaScript, React, Tailwind, Bootstrap
          </li>
          <li>
            <strong>Back End:</strong> PHP (Laravel), Node.js (dasar)
          </li>
          <li>
            <strong>Mobile:</strong> Flutter, Android Studio
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL, MySQL, Firebase
          </li>
          <li>
            <strong>Lainnya:</strong> Git, REST API, JSON, OAuth2, Deployment (Shared Hosting/VPS)
          </li>
        </ul>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, price, onConsult }) {
  return (
    <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">{title}</h3>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {price && <p className="font-semibold text-green-600 dark:text-green-400 mb-4">{price}</p>}
      </div>
      <button
        onClick={onConsult}
        className="mt-auto bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 dark:bg-green-400 dark:text-gray-900 dark:hover:bg-green-500 transition"
        aria-label={`Konsultasi WhatsApp untuk layanan ${title}`}
      >
        Konsultasi via WhatsApp
      </button>
    </div>
  );
}
