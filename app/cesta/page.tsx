"use client" 
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function ParishFinderSection() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const [isLoaded] = useState(true);
     const [scrollY, setScrollY] = useState(0);
     const [openFAQ, setOpenFAQ] = useState<number | null>(null);  
     useEffect(() => {
         const handleScroll = () => setScrollY(window.scrollY);
         window.addEventListener("scroll", handleScroll);
         return () => {
           window.removeEventListener("scroll", handleScroll);
         };
       }, []);

  const handleSearch = () => {
    if (selectedRegion) {
      console.log(`Searching for parishes in: ${selectedRegion}`);
      // Zde by bylo přesměrování na stránku s výsledky
      alert(`Přesměrování na stránku s farnostmi v kraji: ${selectedRegion}`);
    } else {
      alert("Prosím vyberte kraj před vyhledáváním.");
    }
  };

  const handleContactParish = () => {
    console.log('Opening parish contact page');
    alert('Přesměrování na stránku s kontakty na farnosti');
  };

  const handleNavigate = (path: string) => {
    console.log(`Navigating to: ${path}`);
    alert(`Přesměrování na: ${path}`);
  };
    const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main className="min-h-screen bg-amber-50 scroll-smooth">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 lg:space-x-5">
              <button onClick={() => handleNavigate('/')} className="group relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/20 group-hover:shadow-amber-500/30 transition-all duration-500 group-hover:scale-105">
                  <svg className="w-7 h-7 lg:w-9 lg:h-9 text-white" viewBox="0 0 128 128" fill="currentColor">
                    <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8" />
                    <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2" />
                    <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z" />
                    <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z" />
                  </svg>
                </div>
              </button>
              <button
                onClick={() => handleNavigate('/')}
                className="text-2xl lg:text-4xl font-black bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent tracking-tight hover:from-amber-700 hover:to-amber-800 transition-all duration-500"
              >
                Božííí
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                href="/"
                className="group relative px-4 xl:px-6 py-3 text-amber-800 font-bold text-base xl:text-lg transition-all duration-300 bg-amber-100 rounded-2xl"
              >
                <span className="relative z-10">Úvod</span>
              </Link>
              <Link 
                href="/priprava"
                className="group relative px-4 xl:px-6 py-3 text-amber-700 hover:text-amber-900 font-medium text-base xl:text-lg transition-all duration-300"
              >
                <span className="relative z-10">Příprava</span>
                <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </Link>
              
              {/* Svátosti Dropdown */}
              <div className="relative group">
                <button className="group relative px-4 xl:px-6 py-3 text-amber-700 hover:text-amber-900 font-medium text-base xl:text-lg transition-all duration-300 flex items-center">
                  <span className="relative z-10">Svátosti</span>
                  <svg
                    className="w-4 h-4 xl:w-5 xl:h-5 ml-2 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                </button>
                <div className="absolute top-full left-0 mt-4 w-64 xl:w-72 bg-amber-50/98 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-amber-200/30 border border-amber-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4 space-y-2">
                    <Link 
                      href="/krest"
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-amber-700 hover:text-amber-900 hover:bg-amber-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
                    >
                      Křest
                    </Link>
                    <Link 
                      href="/birmovani"
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-amber-700 hover:text-amber-900 hover:bg-amber-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
                    >
                      Biřmování
                    </Link>
                    <Link 
                      href="/eucharistie"
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-amber-700 hover:text-amber-900 hover:bg-amber-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
                    >
                      Eucharistie
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/cesta"
                className="group relative px-4 xl:px-6 py-3 text-amber-700 hover:text-amber-900 font-medium text-base xl:text-lg transition-all duration-300"
              >
                <span className="relative z-10">Cesta</span>
                <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </Link>
            </nav>
          </div>
          </div>
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-3 bg-amber-200 text-amber-800 rounded-full font-bold text-lg mb-8 shadow-lg border border-amber-300">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Najdi svou cestu
          </div>
          <h2 className="text-5xl font-black text-amber-900 mb-8">
            Kde se
            <br />
            <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
              připojit?
            </span>
          </h2>
          <p className="text-xl text-amber-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Najdi farnost nebo křesťanské společenství ve svém okolí. Pomůžeme ti najít správné kontakty a informace o přípravě na křest.
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-700 to-amber-900 mx-auto rounded-full"></div>
        </div>

        {/* Main Search Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Search Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-800/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-amber-200/50">
              <h3 className="text-3xl font-black text-amber-900 mb-8 text-center">
                Vyhledej farnost
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-amber-800 text-sm font-bold mb-2">
                    Vyber svůj kraj
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-4 focus:ring-amber-600/20 bg-white transition-all duration-300 text-lg font-medium"
                  >
                    <option value="">Vyber kraj</option>
                    <option value="Praha">Praha</option>
                    <option value="Středočeský">Středočeský</option>
                    <option value="Jihočeský">Jihočeský</option>
                    <option value="Plzeňský">Plzeňský</option>
                    <option value="Karlovarský">Karlovarský</option>
                    <option value="Ústecký">Ústecký</option>
                    <option value="Liberecký">Liberecký</option>
                    <option value="Královéhradecký">Královéhradecký</option>
                    <option value="Pardubický">Pardubický</option>
                    <option value="Vysočina">Vysočina</option>
                    <option value="Jihomoravský">Jihomoravský</option>
                    <option value="Olomoucký">Olomoucký</option>
                    <option value="Zlínský">Zlínský</option>
                    <option value="Moravskoslezský">Moravskoslezský</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-800 text-sm font-bold mb-2">
                    Město (volitelné)
                  </label>
                  <input
                    type="text"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    placeholder="Zadej název města"
                    className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-4 focus:ring-amber-600/20 bg-white transition-all duration-300 text-lg"
                  />
                </div>

                <button
                  onClick={handleSearch}
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-xl font-bold text-lg shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105 flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Najít farnosti
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-800/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-amber-200/50">
                <h4 className="text-2xl font-black text-amber-900 mb-6">Rychlé akce</h4>
                
                <div className="space-y-4">
                  <button
                    onClick={handleContactParish}
                    className="w-full flex items-center justify-between p-4 bg-amber-50 hover:bg-amber-100 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-amber-900">Kontaktuj farnost</p>
                        <p className="text-amber-700 text-sm">Přímo oslovit místní farnost</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleNavigate('/priprava')}
                    className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-blue-900">Příprava na křest</p>
                        <p className="text-blue-700 text-sm">Zjisti více o přípravě</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleNavigate('/krest')}
                    className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-green-900">Co je křest?</p>
                        <p className="text-green-700 text-sm">Základní informace o křtu</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Pomocné informace */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200/50">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-900 mb-2">Nevíš, kam patříš?</h4>
                  <p className="text-green-700 leading-relaxed text-sm">
                    Neboj se! Každá farnost ti ráda poradí a nasměruje tě správným směrem. 
                    Můžeš kontaktovat jakoukoli farnost v okolí.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder pro mapu */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-800/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-20 shadow-2xl border border-amber-200/50 h-96 flex items-center justify-center">
            <div className="text-center text-amber-500">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-700 to-amber-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-amber-500/20">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-amber-800 mb-4">Zde bude interaktivní mapa</p>
              <p className="text-lg text-amber-600">
                Mapa s farnostmi a jejich kontakty podle vybraného kraje
              </p>
            </div>
          </div>
        </div>

        {/* Důležité info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-amber-50 p-8 rounded-2xl text-center border border-amber-200/30 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-amber-900 mb-3 text-xl">Rychlá odpověď</h4>
            <p className="text-amber-700 leading-relaxed">
              Většina farností odpoví na tvůj dotaz do 24 hodin. Neboj se napsat!
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl text-center border border-blue-200/30 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-blue-900 mb-3 text-xl">Osobní přístup</h4>
            <p className="text-blue-700 leading-relaxed">
              Každá farnost nabízí individuální přístup podle tvých potřeb a tempa.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl text-center border border-green-200/30 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-green-900 mb-3 text-xl">Vřelé přijetí</h4>
            <p className="text-green-700 leading-relaxed">
              Farní společenství tě přijme s otevřenou náručí, ať už jsi kdekoliv na své cestě.
            </p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}