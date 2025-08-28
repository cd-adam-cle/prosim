"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function PripravatPage() {
  const [isLoaded] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPreparationType, setSelectedPreparationType] = useState<'krest' | 'birmovani' | 'eucharistie'>('krest');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (path: string) => {
    console.log(`Navigating to: ${path}`);
    window.location.href = path;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleStartPreparation = () => {
    scrollToSection('kontakt');
  };

  const handleContactParish = () => {
    console.log('Contacting parish');
    alert('Kontaktujeme farnost pro přípravu na křest.');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Děkujeme za zprávu! Ozveme se ti co nejdříve.');
  };

  return (
    <main className="min-h-screen bg-amber-50 scroll-smooth">
      {/* Header */}
      <header
        className={`fixed top-0 w-full backdrop-blur-3xl border-b z-50 transition-all duration-700 ${
          scrollY > 50 ? "bg-amber-50/95 border-amber-200/50 shadow-lg" : "bg-amber-50/95 border-amber-200/50"
        }`}
      >
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
                Božíí
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
                className="group relative px-4 xl:px-6 py-3 text-amber-700 hover:text-amber-900 font-medium text-base xl:text-lg transition-all duration-300"
              >
                <span className="relative z-10">Úvod</span>
                <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </Link>
              <Link
                href="/priprava"
                className="group relative px-4 xl:px-6 py-3 text-amber-800 font-bold text-base xl:text-lg transition-all duration-300 bg-amber-100 rounded-2xl"
              >
                <span className="relative z-10">Příprava</span>
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
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-blue-700 hover:text-blue-900 hover:bg-amber-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
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
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-red-700 hover:text-red-900 hover:bg-amber-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
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
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-amber-200/50 shadow-xl">
                <div className="space-y-2">
                  <Link href="/" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Úvod</Link>
                  <Link href="/priprava" className="block px-4 py-3 text-amber-800 font-bold bg-amber-100 rounded-xl">Příprava</Link>
                  <div className="space-y-1">
                    <p className="px-4 py-2 text-amber-800 font-semibold text-sm">Svátosti</p>
                    <Link href="/krest" className="block px-6 py-2 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Křest</Link>
                    <Link href="/birmovani" className="block px-6 py-2 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Biřmování</Link>
                    <Link href="/eucharistie" className="block px-6 py-2 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Eucharistie</Link>
                  </div>
                  <Link href="/cesta" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Cesta</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-8 bg-gradient-to-b from-amber-50/60 via-amber-100/40 via-70% to-white">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/6 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center h-full text-left relative">
              <div className="flex items-center mb-6 ml-0 sm:ml-8">
                <div className="w-24 sm:w-32 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 sm:mb-16 leading-tight text-left ml-0 sm:ml-16 -mt-4">
                <span className="block text-amber-900 mb-4">
                  Příprava
                </span>
                <span className="block bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">
                  na přijmutí svátosti
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl"></span>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-amber-700/80 font-light mb-8 sm:mb-12 max-w-2xl leading-relaxed">
                Před pokřtěním musí jedinec podstoupit přípravu, v které se ujistí o svém rozhodnutí a prohloubí své znalosti o víře a samotnou víru.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 sm:mb-16">
                <button 
                  onClick={() => scrollToSection('delka-pripravy')}
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Chci to zkusit
                </button>
              </div>

              <div className="flex flex-col items-center text-center mt-4 sm:mt-8">
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full mb-4"></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-900 mb-4">
                  Více o přípravě
                </h2>            
                <svg className="w-8 h-8 lg:w-9 lg:h-9 text-amber-800 animate-bounce mt-4 sm:mt-8" viewBox="0 0 128 128" fill="currentColor">
                  <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8" />
                  <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2" />
                  <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z" />
                  <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z" />
                </svg>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-800/5 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/90 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-amber-200/50 shadow-2xl">
                  <h3 className="text-2xl sm:text-3xl font-black text-amber-900 mb-6 sm:mb-8 text-center">
                    Jak to vypadá
                  </h3>
                  
                  {/* First Point */}
                  <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-amber-50/50 rounded-2xl border border-amber-200/30">
                    <p className="text-base sm:text-lg text-amber-700 leading-relaxed">
                      Příprava funguje formou <span className="font-semibold text-amber-800">týdenních setkání v malé skupině na cca 1 hodinu.</span> Tyto setkání vede kněz který vám pomáhá pochopit základy víry a ukazuje, jak všechno souvisí s běžným životem i s historií.
                    </p>
                  </div>

                  {/* Second Point */}
                  <div className="p-4 sm:p-6 bg-amber-50/50 rounded-2xl border border-amber-200/30 mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg text-amber-700 leading-relaxed">
                      <span className="font-semibold text-amber-800">Není to přednáška jako v škole, je to interaktivní výklad s prostorem na otázky, vyjasnění nejistot a pomocí chápat.</span>
                    </p>
                  </div>

                  {/* Checkpoints */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                        <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-amber-900 text-sm sm:text-base">Čtení a pochopení pasáží z Bible, zasazení do souvislostí víry a historických souvislostí</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                        <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-amber-900 text-sm sm:text-base">Základy víry, svatá trojice, Ježíšův život a zmrtvých vstání</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                        <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-amber-900 text-sm sm:text-base">Prohloubení vztahu s Bohem</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delka-pripravy" className="py-1 bg-gradient-to-b from-white via-white via-20% to-amber-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto rounded-full mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-amber-800/70 max-w-3xl mx-auto leading-relaxed">
              Základní informace
            </p>
          </div>

          {/* Fixed layout for info cards */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-16">
            {/* Kdy začít card with vertical layout */}
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
              <div className="relative max-w-lg w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-800/5 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-200/50 shadow-xl">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10H17M7 14H12M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-amber-900">Kdy probíhá?</h3>
                  </div>
                  <p className="text-amber-700 text-base sm:text-lg leading-relaxed">
                    Obvyklý <span className="font-semibold text-amber-800">začátek přípravy je v září</span>, každá farnost to může mít podle sebe.
                    <span className="font-semibold text-amber-800"> Můžete se připojit i po začátku</span>, ale pak je na kněžím zda vás pustí k křtu.
                  </p>
                </div>
              </div>

              {/* Button positioned below card */}
              <div className="flex justify-center">
                <button 
                  onClick={() => handleNavigate('/cesta')}
                  className="group relative inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 hover:from-amber-700 hover:to-amber-800"
                >
                  <span className="relative z-10">Zkusím to</span>
                  <svg 
                    className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Délka podle věku */}
          <div className="mb-8 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-black text-amber-900 text-center mb-6 sm:mb-8">
              Délka přípravy podle věku
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Starší mladiství */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl border border-purple-200/50 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-purple-900 mb-2">&lt; 19 let</h4>
                <p className="text-purple-700 text-xs sm:text-sm mb-4">mladiství a dospívající</p>
                <div className="bg-purple-200/50 p-3 rounded-lg">
                  <p className="font-bold text-purple-800">křest(všecko najednou)- 8 měsíců</p>
                  <p className="font-bold text-purple-800">biřmování - 8 měsíců</p>
                  <p className="font-bold text-purple-800">sv. příjmání - ? měsíců</p>
                  <p className="text-purple-700 text-xs sm:text-sm">dá se připojit i pár měsíců po začátku přípravy, ale je na úsudku kněze zda pak budete připraveni na křest</p>
                </div>
              </div>

              {/* Dospělí */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 sm:p-8 rounded-2xl border border-amber-200/50 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-2">&gt; 19 let</h4>
                <p className="text-amber-700 text-xs sm:text-sm mb-4">Dospělí</p>
                <div className="bg-amber-200/50 p-3 rounded-lg">
                  <p className="font-bold text-amber-800">křest - 21 měsíců (2 roky)</p><p className="font-bold text-amber-800">biřmování - 8 měsíců</p><p className="font-bold text-amber-800">sv. příjmání - ? měsíců </p>
                  <p className="text-amber-700 text-xs sm:text-sm">Je delší prostor na to se připojit i pozdně, ale zas je to pak na úsudku kněze</p>
                </div>
              </div>
            </div>
          </div>

          

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
            
            {/* Fáze 1 */}
            <div className="relative flex items-center mb-12 sm:mb-16">
              <div className="w-1/2 pr-4 sm:pr-8 text-right">
                <div className="bg-gradient-to-br from-amber-50/80 to-white backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-amber-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-amber-900 mb-3 sm:mb-4">Začátek přípravy</h3>
                  <p className="text-amber-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    Seznámení s skupinkou, knězem a základy víry.
                  </p>
                  <div className="flex justify-start gap-2 sm:gap-3">
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-purple-200/50 text-purple-800 rounded-full text-xs sm:text-sm font-semibold">1 měsíc</span>
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold">1 měsíc</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-base sm:text-lg">1</span>
              </div>
              <div className="w-1/2 pl-4 sm:pl-8"></div>
            </div>

            {/* Fáze 2 */}
            <div className="relative flex items-center mb-12 sm:mb-16">
              <div className="w-1/2 pr-4 sm:pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-base sm:text-lg">2</span>
              </div>
              <div className="w-1/2 pl-4 sm:pl-8">
                <div className="bg-gradient-to-br from-amber-50/80 to-white backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-amber-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-amber-900 mb-3 sm:mb-4">Přijmutí do katechumenů</h3>
                  <p className="text-amber-800 font-bold text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    Jen pro připravující se na křest
                  </p>
                  <p className="text-amber-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    Přijmutí církví do lidí připravujících se na křest. Dostanete svoji Bibli a pomazání katechumenů.
                  </p>
                  <div className="flex justify-start gap-2 sm:gap-3">
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-purple-200/50 text-purple-800 rounded-full text-xs sm:text-sm font-semibold">3-4 měsíc</span>
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold">3-4 měsíc</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fáze 3 */}
            <div className="relative flex items-center mb-12 sm:mb-16">
              <div className="w-1/2 pr-4 sm:pr-8 text-right">
                <div className="bg-gradient-to-br from-amber-50/80 to-white backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-amber-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-amber-900 mb-3 sm:mb-4">Pokračování v přípravě</h3>
                  <p className="text-amber-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    Pokračování v prohlubování znalostí, víry a vztahu s Bohem.
                  </p>          
                  <div className="flex justify-start gap-2 sm:gap-3">
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-purple-200/50 text-purple-800 rounded-full text-xs sm:text-sm font-semibold">4-9 měsíc</span>
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold">4-19 měsíc</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-base sm:text-lg">3</span>
              </div>
              <div className="w-1/2 pl-4 sm:pl-8"></div>
            </div>

            {/* Křest */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-4 sm:pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-1/2 pl-4 sm:pl-8">
                <div className="bg-gradient-to-br from-green-50/80 to-white backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-green-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-green-900 mb-3 sm:mb-4">Křest - Biřmování - Sv. Příjmání</h3>
                  <p className="text-green-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    A už jen přijmout svátost a Jeho milost.
                  </p>
                  <div className="flex justify-start">
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-semibold">Den D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Důležité info o přípravě Section */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            {/* Důležitá poznámka */}
            <div className="mt-8 sm:mt-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-800/5 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/90 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-amber-200/50 shadow-xl">
                  <div className="flex items-start">
                    <div>
                      <div className="w-24 sm:w-40 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto rounded-full mb-4"></div>
                      <h4 className="text-xl sm:text-2xl font-black text-amber-900 mb-4"></h4>
                      <p className="text-amber-700 text-base sm:text-lg leading-relaxed mb-4">
                        Mít pochybnosti o své víře nebo církve jako takové je naprosto normální. <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-amber-100 text-amber-800 rounded-full text-lg sm:text-lg ">Příprava na křest není o tom, abys hned všemu věřil/a, ale o postupném učení a prohlubování víry.</span> Můžeš klást otázky, sdílet obavy a zkoumat, co pro tebe víra znamená a o tom to je.
                      </p>
                      <p className="text-amber-700 text-base sm:text-lg leading-relaxed">
                        Víra je i o osobní cesta k Bohu, která může být živá a smysluplná. A na téhle cestě nejsi sám/sama — máš kolem sebe komunitu, která tě podpoří. <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-amber-100 text-amber-800 rounded-full text-lg sm:text-lg ">Křest je jen začátek, první krok, po něm je ještě dlouhá cesta objevování všeho co nám Bůh předává.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 text-amber-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-amber-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-56 h-56 lg:w-80 lg:h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-72 lg:h-72 bg-amber-400/8 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
              
              {/* Brand Section */}
              <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6 lg:mb-8">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/20">
                    <svg className="w-7 h-7 lg:w-10 lg:h-10 text-white" viewBox="0 0 128 128" fill="currentColor">
                      <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8"/>
                      <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2"/>
                      <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z"/>
                      <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent">
                    Božíí
                  </h3>
                </div>
                <p className="text-amber-700 leading-relaxed mb-6 lg:mb-8 text-lg sm:text-xl max-w-md mx-auto lg:mx-0">
                  Najdi si svou cestu
                </p>
              </div>

              {/* Contact Section */}
              <div className="flex flex-col gap-3 lg:gap-4 items-center justify-center sm:col-span-2 lg:col-span-1">
                {/* Nadpis */}
                <div className="flex items-center justify-center p-3 lg:p-4 bg-amber-200/30 hover:bg-amber-200/50 rounded-lg transition-all duration-300 group cursor-pointer w-full">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl lg:rounded-2xl flex items-center justify-center mr-3 lg:mr-4 shadow-lg shadow-amber-500/20">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg lg:text-xl font-black text-amber-900">Kontakt na nás</h4>
                </div>
                
                {/* Telefon */}
                <Link
                  href="tel:+420728126406" 
                  className="flex items-center justify-center p-3 lg:p-4 bg-amber-200/30 hover:bg-amber-200/50 rounded-lg transition-all duration-300 group cursor-pointer w-full"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mr-3 lg:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-amber-900 group-hover:text-amber-700 transition-colors text-base lg:text-lg">+420 728 126 406</span>
                </Link>
                
                {/* Email */}
                <Link
                  href="mailto:bozisupport@pm.me" 
                  className="flex items-center justify-center p-3 lg:p-4 bg-amber-200/30 hover:bg-amber-200/50 rounded-lg transition-all duration-300 group cursor-pointer w-full"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-amber-700 mr-3 lg:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <span className="text-amber-900 group-hover:text-amber-700 transition-colors text-base lg:text-lg">bozisupport@pm.me</span>
                </Link>
              </div>

              {/* Support Section */}
              <div className="flex flex-col gap-3 lg:gap-4 justify-start sm:col-span-2 lg:col-span-1">
                <button 
                  onClick={handleContactParish}
                  className="group flex items-center justify-between p-3 lg:p-4 bg-amber-100/50 hover:bg-amber-100/80 rounded-xl transition-all duration-300 cursor-pointer group-hover:scale-[1.02] border border-amber-200/50 hover:border-amber-300/50 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-amber-600/20 rounded-lg flex items-center justify-center mr-3 lg:mr-4">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-amber-900 font-semibold text-base lg:text-lg">Kontakt na farnost</p>
                      <p className="text-amber-600 text-sm">Najdi si svou farnost</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-amber-600 group-hover:text-amber-900 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}