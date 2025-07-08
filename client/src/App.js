import React, { useEffect } from "react";

import "./index.css";
import logo from "./logo.png"; // pastikan path ini benar relatif terhadap App.js
import logo2 from "./logo2.png"; // pastikan path ini benar relatif terhadap App.js
import logo3 from "./logo3.png"; // pastikan path ini benar relatif terhadap App.js
import logo4 from "./logo4.png"; // pastikan path ini benar relatif terhadap App.js


function App() {
  useEffect(() => {
    const genreCards = document.querySelectorAll(".genre-card");
    genreCards.forEach((card) => {
      card.addEventListener("click", () => {
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.style.transform = "";
        }, 150);
      });
    });

    const header = document.querySelector(".header");
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    const animateStats = () => {
      const statNumbers = document.querySelectorAll(".stat-number");
      statNumbers.forEach((stat) => {
        const targetNumber = parseInt(stat.dataset.number, 10);
        if (!isNaN(targetNumber)) {
          let currentNumber = 0;
          const increment = Math.ceil(targetNumber / 50);
          const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
              currentNumber = targetNumber;
              clearInterval(timer);
            }
            stat.textContent = `${currentNumber}`;
          }, 50);
        }
      });
    };

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        });
      });
      observer.observe(statsSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const genres = [
    {
      icon: "🌿",
      title: "Hewan dan Tumbuhan",
      desc: "Eksplorasi dunia fauna dan flora dengan koleksi buku tentang kehidupan hewan, tumbuhan, dan ekosistem alam",
      link: "1N38iTkIsdh5_UibINwkjMeam4GqtL4QO",
    },
    {
      icon: "🏛️",
      title: "Arsitektur",
      desc: "Pelajari seni membangun dan merancang dengan buku-buku tentang arsitektur modern, klasik, dan inovatif",
      link: "18aib3MwVGDli1kMjRj6WNbIQuFqBBVYC",
    },
    {
      icon: "🎭",
      title: "Cerita Rakyat",
      desc: "Temukan warisan budaya leluhur dengan koleksi cerita rakyat, dongeng tradisional, dan legenda nusantara",
      link: "1bYTGjYseRFZMWNjoAvpncisCGaG2TKBX",
    },
    {
      icon: "🌍",
      title: "Alam dan Lingkungan",
      desc: "Pahami pentingnya kelestarian alam dengan buku tentang lingkungan, konservasi, dan keberlanjutan",
      link: "14CEdhh-9Pbd6Xdc3ykk93dvu3LUwUcsZ",
    },
    {
      icon: "🗺️",
      title: "Petualangan",
      desc: "Rasakan sensasi petualangan melalui cerita eksplorasi, perjalanan, dan kisah-kisah mendebarkan",
      link: "1soOKGZkzt0JHPp5KzJW2FMsAV93JlQp4",
    },
    {
      icon: "👶",
      title: "Anak Indonesia",
      desc: "Buku-buku edukatif dan cerita yang menginspirasi untuk anak-anak Indonesia dengan nilai-nilai budaya lokal",
      link: "10RKxpcyuMG-63JYQ00_g4NF9kUsP2J3H",
    },
    {
      icon: "🎨",
      title: "Seni dan Budaya",
      desc: "Menyelami kekayaan seni dan budaya nusantara serta dunia melalui koleksi buku yang menginspirasi",
      link: "1r0sFesKElb_VByoeBIF6nAoRyAOLdUQU",
    },
    {
      icon: "🍽️",
      title: "Kuliner",
      desc: "Jelajahi cita rasa nusantara dan dunia dengan koleksi buku resep, sejarah kuliner, dan tips memasak",
      link: "1MG6SKvPpDWTSZ9ZZM47JQhumdyBvaTeP",
    },
  ];

  return (
    <div className="container">
      <div className="header">
  <div className="logo-group">
  <img src={logo} alt="Logo 1" />
  <img src={logo2} alt="Logo 2" />
  <img src={logo3} alt="Logo 3" />
  <img src={logo4} alt="Logo 4" />
</div>

  <h1>📚 Perpustakaan Digital</h1>
  <p>Jelajahi Koleksi Buku Berdasarkan Genre</p>
 
</div>


      <div className="genres-grid">
        {genres.map((genre, idx) => (
          <a
            key={idx}
            href={`https://drive.google.com/drive/folders/${genre.link}?usp=drive_link`}
            className="genre-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="genre-icon">{genre.icon}</span>
            <h3 className="genre-title">{genre.title}</h3>
            <p className="genre-description">{genre.desc}</p>
            <span className="genre-link-text">Jelajahi Koleksi →</span>
          </a>
        ))}
      </div>

      <div className="stats-section">
  <div className="stats-grid">
    <div className="stat-item">
      <div className="stat-number" data-number="8">0</div>
      <div className="stat-label">Genre Tersedia</div>
    </div>
    <div className="stat-item">
      <div className="stat-number" data-number="100">0</div>
      <div className="stat-label">Koleksi Buku</div>
    </div>
    <div className="stat-item">
      <div className="stat-number" data-number="Gratis">Gratis</div>
      <div className="stat-label">Akses</div>
    </div>
    <div className="stat-item">
      <div className="stat-number" data-number="100%">100%</div>
      <div className="stat-label">Digital</div>
    </div>
  </div>
</div>


        </div>
      </div>

     <footer className="footer">
  &copy;  Created by MMD FILKOM UB 2025 – Kelompok 25 Desa Kuningan
</footer>

    </div>
  );
}


export default App;
