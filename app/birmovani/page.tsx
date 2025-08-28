"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";


export default function BirmovaniPage() {
  const [isLoaded] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleStartPreparation = () => {
    console.log('Starting confirmation preparation');
    alert('Začínáš přípravný kurz na biřmování. Kontaktujeme tě s dalšími informacemi.');
  };

  const handleContactParish = () => {
    console.log('Contacting parish for confirmation');
    alert('Kontaktujeme farnost pro biřmování. Ozveme se ti co nejdříve s informacemi o přípravě.');
  };

  // Komponenta pro rotující dary
  function HolySpiritGifts() {
    const [currentSet, setCurrentSet] = useState(0);

    const gifts = [
      {
        name: "Moudrost",
        description: "Schopnost vidět svět Božíma očima a rozumět hlubokému smyslu života."
      },
      {
        name: "Rozum", 
        description: "Dar poznávání a pochopení pravd víry, které přesahují lidské chápání."
      },
      {
        name: "Rada",
        description: "Schopnost rozpoznat správnou cestu a dávat moudrá rozhodnutí v životě."
      },
      {
        name: "Síla",
        description: "Odvaha překonávat překážky ve víře a stát si za svými přesvědčeními."
      },
      {
        name: "Poznání",
        description: "Dar rozlišování mezi dobrem a zlem, poznávání Boží vůle v konkrétních situacích."
      },
      {
        name: "Zbožnost", 
        description: "Hluboká úcta k Bohu a radost z modlitby a bohoslužby."
      },
      {
        name: "Bázeň před Pánem",
        description: "Hluboká úcta a respekt k Bohu, ne strach, ale obdiv před Jeho svatostí."
      }
    ];

    // Rozdělíme dary do skupin po 3
    const giftSets = [
      gifts.slice(0, 3),   // Moudrost, Rozum, Rada
      gifts.slice(3, 6),   // Síla, Poznání, Zbožnost
      gifts.slice(6, 7).concat(gifts.slice(0, 2)) // Bázeň + první dva znovu pro plný set
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % giftSets.length);
      }, 5000);

      return () => clearInterval(interval);
    }, [giftSets.length]);

    return (
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {giftSets[currentSet].map((gift, index) => (
          <div 
            key={`${currentSet}-${index}`}
            className="bg-white/60 p-4 sm:p-6 rounded-2xl border border-amber-200/30 hover:bg-white/80 transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full mr-3"></div>
              <h4 className="text-base sm:text-lg font-bold text-amber-900">{gift.name}</h4>
            </div>
            <p className="text-amber-700 text-sm sm:text-base">
              {gift.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

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
                    <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8"/>
                    <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2"/>
                    <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z"/>
                    <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z"/>
                  </svg>
                </div>
              </button>
              <button
                onClick={() => handleNavigate('/')}
                className="text-2xl lg:text-4xl font-black bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent tracking-tight hover:from-amber-700 hover:to-amber-800 transition-all duration-500"
              >
                Boží
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
                className="group relative px-4 xl:px-6 py-3 text-amber-700 hover:text-amber-900 font-medium text-base xl:text-lg transition-all duration-300"
              >
                <span className="relative z-10">Příprava</span>
                <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </Link>
              
              {/* Svátosti Dropdown */}
              <div className="relative group">
                <button className="group relative px-4 xl:px-6 py-3 text-amber-800 font-bold text-base xl:text-lg transition-all duration-300 bg-amber-100 rounded-2xl flex items-center">
                  <span className="relative z-10">Svátosti</span>
                  <svg
                    className="w-4 h-4 xl:w-5 xl:h-5 ml-2 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-4 w-64 xl:w-72 bg-amber-50/98 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-amber-200/30 border border-amber-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4 space-y-2">
                    <Link 
                      href="/krest"
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
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
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-red-700 hover:text-red-900 hover:bg-red-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
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
                  <Link  href="/" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Úvod</ Link>
                  <Link  href="/priprava" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Příprava</Link>
                  <div className="space-y-1">
                    <p className="px-4 py-2 text-amber-800 font-semibold text-sm">Svátosti</p>
                    <Link  href="/krest" className="block px-6 py-2 text-blue-800 font-bold bg-blue-100 rounded-xl">Křest</Link>
                    <Link  href="/birmovani" className="block px-6 py-2 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Biřmování</Link>
                    <Link  href="/eucharistie" className="block px-6 py-2 text-red-700 hover:bg-red-100 rounded-xl transition-colors duration-300">Eucharistie</Link>
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
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-amber-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-yellow-500/6 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center h-full text-left relative">
              {/* Decorative element */}
              <div className="flex items-center mb-4 sm:mb-6 ml-0 sm:ml-8">
                <div className="w-24 sm:w-32 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 sm:mb-16 leading-tight text-left ml-0 sm:ml-16 -mt-4">
                <span className="block text-amber-900 mb-4">
                  Biřmování
                </span>
                <span className="block bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">
                  <span className="text-3xl sm:text-4xl lg:text-5xl">dar Ducha svatého</span>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-amber-700/80 font-light mb-8 sm:mb-12 max-w-2xl leading-relaxed">
                Biřmování je svátost, která posiluje a dokonává dílo křtu. Je to potvrzení víry a přijetí 
                darů Ducha svatého pro dospělý křesťanský život.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-16">
                <button 
                  onClick={() => scrollToSection('co-je-birmovani')}
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Chci to zkusit →
                </button>
                
                <button 
                  onClick={handleContactParish}
                  className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-amber-700 text-amber-800 font-bold text-base sm:text-lg rounded-xl hover:bg-amber-100 transition-all duration-300 hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm"
                >
                  Kontaktovat farnost
                </button>
              </div>

              {/* Centered question with connection line */}
              <div className="flex flex-col items-center text-center mt-4 sm:mt-8">
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full mb-4"></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-900 mb-4">
                  Více o biřmování
                </h2>            
                <svg className="w-8 h-8 lg:w-9 lg:h-9 text-amber-800 animate-bounce mt-4 sm:mt-8" viewBox="0 0 128 128" fill="currentColor">
                  <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8" />
                  <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2" />
                  <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z" />
                  <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z" />
                </svg>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/15 to-amber-800/15 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-3xl border-4 sm:border-8 border-white/70">
                <img 
                  src="/images/birm.webp" 
                  alt="Biřmování - dotyk biskupa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Confirmation Section */}
      <section id="co-je-birmovani" className="py-12 sm:py-24 bg-gradient-to-b from-white via-white via-20% to-amber-30/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-800/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-8 sm:p-12 lg:p-16 rounded-3xl border border-amber-200/50">
              
              <div className="space-y-8 sm:space-y-12">
                {/* Question title */}
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl font-black text-amber-900 mb-4 sm:mb-6">
                    Co je biřmování?
                  </h2>
                  <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto rounded-full"></div>
                </div>
                
                {/* Main description with image */}
                <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="bg-gradient-to-r from-amber-100/30 to-amber-200/30 p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-200/30 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <p className="text-amber-700 text-lg sm:text-xl leading-relaxed">
                      Biřmování je svátost, která upevňuje křestní milost a dává sílu k vědomému a zralému životu víry. Přijetím této svátosti člověk dostává plnost darů Ducha svatého – moudrost, rozum, radu, sílu, poznání, zbožnost a bázeň před Bohem. Biskup při biřmování vkládá ruce a maže svatým olejem, čímž potvrzuje přijetí Ducha svatého. Biřmování posiluje věřícího, aby vyznával víru nejen slovy, ale i životem, a stal se aktivním členem společenství církve.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src="/images/brimzzadu.jpg" 
                        alt="Biřmování - dotyk biskupa" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Age and requirements section */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src="/images/moger.webp" 
                        alt="Příprava na biřmování" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-200/50 to-amber-100/50 p-6 sm:p-8 rounded-2xl border border-amber-200/30 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <h3 className="text-xl sm:text-2xl font-black text-amber-900 mb-4">Kdo se může biřmovat?</h3>
                    
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <div className="flex items-center space-x-3 bg-amber-50 p-3 sm:p-4 rounded-xl">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-bold text-amber-900 text-sm sm:text-base">Pokřtění lidé</p>
                          <p className="text-amber-700 text-xs sm:text-sm"></p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 bg-amber-50 p-3 sm:p-4 rounded-xl">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-bold text-amber-900 text-sm sm:text-base">Lidé připravující se na křest</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-amber-700 text-base sm:text-lg leading-relaxed">
                      Pokud se člověk chce pokřtít přímo s křtem se podstupuje i biřmování a sv. přijímání.
                    </p>
                  </div>
                </div>

<div className="bg-gradient-to-r from-amber-100/30 to-amber-200/30 p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-200/30 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:bg-gradient-to-r hover:from-amber-100/50 hover:to-amber-200/50" onClick={() => handleNavigate('/priprava')}>
                  <h3 className="text-2xl sm:text-3xl font-black text-amber-900 mb-4 sm:mb-6 text-center group-hover:text-amber-800 transition-colors">Příprava na biřmování</h3>
                  <p className="text-amber-700 text-lg sm:text-xl leading-relaxed text-center mb-6 sm:mb-8 group-hover:text-amber-600 transition-colors">
                    Příprava na biřmování zahrnuje prohloubení víry, poznání Ducha svatého a jeho darů, seznámení se životem církve a osobní duchovní růst.
                  </p>
                  
                  <div className="flex justify-center items-center text-amber-600 group-hover:text-amber-800 transition-colors">
                    <span className="font-medium mr-2">Klikni pro více informací</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Dary Ducha svatého s rotací */}
                <div className="bg-gradient-to-r from-amber-100/30 to-amber-200/30 p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-200/30 hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => handleNavigate('/priprava')}>
                  <h3 className="text-2xl sm:text-3xl font-black text-amber-900 mb-4 sm:mb-6 text-center group-hover:text-amber-800 transition-colors">
                    Sedm darů Ducha svatého
                  </h3>
                  
                  <p className="text-amber-700 text-lg sm:text-xl leading-relaxed text-center mb-8 sm:mb-10">
                    Při biřmování přijímáš sedm tradičních darů Ducha svatého, které ti pomohou růst ve víře a sloužit druhým.
                  </p>

                  {/* Rotující dary */}
                  <div className="mb-8 sm:mb-10">
                    <HolySpiritGifts />
                  </div>

                  {/* Praktické výsledky */}
                  <div className="bg-gradient-to-r from-amber-50 to-white p-6 sm:p-8 rounded-2xl border border-amber-200/30 mb-6 sm:mb-8">
                    <h4 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4 sm:mb-6 text-center">
                      Co to znamená prakticky?
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <ul className="space-y-2 sm:space-y-3">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-amber-700 text-sm sm:text-base">Větší jistota v rozhodováních podle křesťanských hodnot</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-amber-700 text-sm sm:text-base">Síla překonávat těžká období života</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-amber-700 text-sm sm:text-base">Hlubší vztah s Bohem a radost z modlitby</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <ul className="space-y-2 sm:space-y-3">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-amber-700 text-sm sm:text-base">Schopnost dávat moudrá rada a pomáhat druhým</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-amber-700 text-sm sm:text-base">Odvaha svědčit o víře a žít podle ní</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-amber-700 text-sm sm:text-base">Větší empatii a schopnost odpouštět</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-amber-700 text-base sm:text-lg mb-6 sm:mb-8 italic">
                      ;Tyto dary nejsou jen teoretické - jsou to skutečné síly, které ti pomohou žít naplněný křesťanský život.;
                    </p>
                    
                    <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
                      <span>Zjistit více o přípravě na biřmování</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions and Contact Section */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-amber-50/30 via-amber-50/30 via-65% to-amber-100/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-200/50 to-amber-100/50 rounded-3xl p-8 sm:p-12 border border-amber-200/50">
            <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full mb-6 sm:mb-8"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-900 mb-4">
                Máš otázky o biřmování?
              </h2>           
            </div>
            <p className="text-amber-700 mb-4 text-center text-lg sm:text-xl">
              Ať už je to cokoliv - o přípravě, obřadu nebo životě po biřmování, 
              <span className="font-bold text-amber-800 bg-amber-200 px-2 py-1 rounded">neboj se zeptat</span>.
            </p>
            
            <div className="max-w-7xl mx-auto text-center">
              <div className="bg-white/60 p-6 sm:p-8 rounded-2xl border border-amber-200/30 mb-6 sm:mb-8">
                <h4 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 sm:mb-4">Kontaktuj svou farnost</h4>
                <p className="text-amber-700 mb-4 sm:mb-6 text-sm sm:text-base">
                  Najdeme ti kontakt na tvou farnost a pomůžeme s dalšími kroky k biřmování.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button 
                    onClick={handleContactParish}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    Napsat farnosti
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 sm:gap-10 mb-8 sm:mb-12">
                {/* Widget 1 - Bez stresu */}
                <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl text-left border border-amber-200/30 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-amber-900 mb-3 sm:mb-4 text-lg sm:text-xl">Bez stresu</h4>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base">
                    Příprava na biřmování je postupná a klidná. 
                    <span className="font-semibold text-amber-800">Jde o to růst ve víře svým tempem</span>, 
                    ne o splnění nějakých požadavků.
                  </p>
                </div>

                {/* Widget 2 - Ve společenství */}
                <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl text-left border border-amber-200/30 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-amber-900 mb-3 sm:mb-4 text-lg sm:text-xl">Ve společenství</h4>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base">
                    Příprava probíhá ve skupině vrstevníků. 
                    <span className="font-semibold text-amber-800">Najdeš nové přátele</span> 
                    a společně budete objevovat víru.
                  </p>
                </div>

                {/* Widget 3 - Pro tvůj růst */}
                <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl text-left border border-amber-200/30 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-amber-900 mb-3 sm:mb-4 text-lg sm:text-xl">Pro tvůj růst</h4>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base">
                    Biřmování není jen obřad, ale 
                    <span className="font-semibold text-amber-800">začátek dospělého křesťanského života</span> 
                    s novými možnostmi a odpovědností.
                  </p>
                </div>
              </div>

              <p className="text-amber-600 text-xs sm:text-sm italic">
                ;Duch svatý vás povede do vší pravdy a dá vám sílu být svědky.; 
              </p>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
              
              {/* Brand Section */}
              <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-4 mb-6 lg:mb-8">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/20">
                    <svg className="w-7 h-7 lg:w-10 lg:h-10 text-white" viewBox="0 0 128 128" fill="currentColor">
                      <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8"/>
                      <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2"/>
                      <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z"/>
                      <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent">
                    Boží
                  </h3>
                </div>
                <p className="text-amber-700 leading-relaxed mb-6 lg:mb-8 text-lg sm:text-xl max-w-md mx-auto lg:mx-0">
                  Najdi si svou cestu
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:gap-4 justify-start">
                {/* Nadpis */}
                <div className="flex items-center p-3 lg:p-4 bg-amber-200/30 hover:bg-amber-200/50 rounded-lg transition-all duration-300 group cursor-pointer">
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
                  className="flex items-center p-3 lg:p-4 bg-amber-200/30 hover:bg-amber-200/50 rounded-lg transition-all duration-300 group cursor-pointer"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mr-3 lg:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-amber-900 group-hover:text-amber-700 transition-colors text-base lg:text-lg">+420 728 126 406</span>
                </Link>
                
                {/* Email */}
                <Link  
                  href="mailto:bozisupport@pm.me" 
                  className="flex items-center p-3 lg:p-4 bg-amber-200/30 hover:bg-amber-200/50 rounded-lg transition-all duration-300 group cursor-pointer"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-amber-700 mr-3 lg:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <span className="text-amber-900 group-hover:text-amber-700 transition-colors text-base lg:text-lg">bozisupport@pm.me</span>
                </  Link>
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
                      <p className="text-amber-900 font-semibold text-base lg:text-lg">Začít přípravu na biřmování</p>
                      <p className="text-amber-600 text-xs sm:text-sm">Napiš nám nebo zavolej</p>
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

      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
}