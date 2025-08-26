"use client"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [selectedSacrament, setSelectedSacrament] = useState(null)
  const [isLoaded, setIsLoaded] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [selectedRegion, setSelectedRegion] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavigate = (path: string) => {
    console.log(`Navigating to: ${path}`)
    window.location.href = path
  }

  const handleSearch = () => {
    if (selectedRegion) {
      console.log(`Searching for communities in: ${selectedRegion}`)
      alert(`Vyhledávání společenství v kraji: ${selectedRegion}`)
    } else {
      alert("Prosím vyberte kraj před vyhledáváním.")
    }
  }

  const handleContactParish = () => {
    console.log('Contacting parish');
    alert('Kontaktujeme farnost pro křest.');
  }

  const handleSacramentAction = (sacrament: string) => {
    console.log(`Starting preparation for: ${sacrament}`)
    switch (sacrament) {
      case "krest":
        handleNavigate("/krest")
        break
      case "birmovani":
        handleNavigate("/birmovani")
        break
      case "eucharistie":
        handleNavigate("/eucharistie")
        break
      default:
        console.log("Unknown sacrament")
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
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
              <a
                href="/"
                className="group relative px-4 xl:px-6 py-3 text-amber-800 font-bold text-base xl:text-lg transition-all duration-300 bg-amber-100 rounded-2xl"
              >
                <span className="relative z-10">Úvod</span>
              </a>
              <a
                href="/priprava"
                className="group relative px-4 xl:px-6 py-3 text-amber-700 hover:text-amber-900 font-medium text-base xl:text-lg transition-all duration-300"
              >
                <span className="relative z-10">Příprava</span>
                <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </a>
              
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
                    <a
                      href="/krest"
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-blue-700 hover:text-blue-900 hover:bg-amber-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
                    >
                      Křest
                    </a>
                    <a
                      href="/birmovani"
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-amber-700 hover:text-amber-900 hover:bg-amber-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
                    >
                      Biřmování
                    </a>
                    <a
                      href="/eucharistie"
                      className="block px-4 xl:px-6 py-3 xl:py-4 text-amber-700 hover:text-red-900 hover:bg-red-100/80 rounded-2xl transition-all duration-300 font-medium text-base xl:text-lg"
                    >
                      Eucharistie
                    </a>
                  </div>
                </div>
              </div>
              
              <a
                href="/cesta"
                className="group relative px-4 xl:px-6 py-3 text-amber-700 hover:text-amber-900 font-medium text-base xl:text-lg transition-all duration-300"
              >
                <span className="relative z-10">Cesta</span>
                <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </a>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-amber-200/50 shadow-xl">
                <div className="space-y-2">
                  <a href="/" className="block px-4 py-3 text-amber-800 font-bold bg-amber-100 rounded-xl">Úvod</a>
                  <a href="/priprava" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Příprava</a>
                  <div className="space-y-1">
                    <p className="px-4 py-2 text-amber-800 font-semibold text-sm">Svátosti</p>
                    <a href="/krest" className="block px-6 py-2 text-blue-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Křest</a>
                    <a href="/birmovani" className="block px-6 py-2 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Biřmování</a>
                    <a href="/eucharistie" className="block px-6 py-2 text-red-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Eucharistie</a>
                  </div>
                  <a href="/cesta" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded-xl transition-colors duration-300">Cesta</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
 <section className="relative min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh] pt-28 lg:pt-40 overflow-hidden bg-gradient-to-br from-amber-50/60 via-amber-100/40 to-yellow-50/50">        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-yellow-500/6 rounded-full blur-3xl"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex flex-col items-center gap-8 lg:gap-16 transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
                              <div className="flex flex-col lg:flex-row items-center justify-center gap-0 sm:gap-0 lg:gap-8 w-full">
                <div className="flex flex-col items-center lg:items-end text-center lg:text-right order-2 lg:order-1">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-amber-900 mb-2 lg:mb-4">
                    <span className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">
                      Božííí
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-amber-800/60 font-light leading-relaxed">
                  
                  </p>
                </div>
                
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-800 leading-tight mb-4 lg:mb-6">
                    Příprava na křest,
                    <br />
                    biřmování
                    <br />a{" "}
                    <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                      sv. přijímání
                    </span>
                  </h2>
                </div>
              </div>              
              
              <button 
                onClick={() => handleNavigate('/krest')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-semibold text-base sm:text-lg rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
              >
                cesta k křtu →
              </button>
              
              <svg className="w-8 h-8 lg:w-9 lg:h-9 text-amber-800 animate-bounce mt-4 lg:mt-8" viewBox="0 0 128 128" fill="currentColor">
                <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8" />
                <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2" />
                <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z" />
                <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SVÁTOSTI SECTION */}
      <section className="py-0 sm:py-0 lg:py-4 bg-gradient-to-b from-amber-100/50 to-amber-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 sm:mb-4 lg:mb-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-3 sm:py-4 bg-amber-100 text-amber-900 rounded-full font-bold text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4 shadow-md border border-amber-200 hover:shadow-lg transition-all duration-300">
              Svátosti
            </div>
            <p className="text-base sm:text-lg text-amber-800/70 max-w-3xl mx-auto leading-relaxed mb-4">
              Každá svátost je důležitým krokem na cestě víry
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {/* Křest Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700/12 to-amber-900/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-amber-50/80 to-white backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] h-full">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 lg:mb-6 bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent">
                  Křest
                </h3>
                <p className="text-amber-800/80 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6">
                  Křest mladých, dospívajících nebo dospělých je začátkem života s Bohem. Pojďme si o něm říct více, nebo
                  přímo kam se zájemce má obrátit.
                </p>
                <button
                  onClick={() => handleSacramentAction("krest")}
                  className="group/btn relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-bold text-sm sm:text-base lg:text-lg rounded-2xl transition-all duration-300 hover:from-amber-800 hover:to-amber-950 hover:scale-105 cursor-pointer shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 w-full sm:w-auto"
                >
                  <span className="relative z-10">Dozvědět se více</span>
                </button>
              </div>
            </div>

            {/* Biřmování Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/12 to-amber-800/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-amber-50/60 to-white backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-300/40 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] h-full">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 lg:mb-6 bg-gradient-to-r from-amber-800 to-amber-950 bg-clip-text text-transparent">
                  Biřmování
                </h3>
                <p className="text-amber-800/80 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6">
                  Pro pokřtěné při přijímání biřmování symbolizuje vstoupení do vyspělého vztahu s Bohem a jedinec
                  dostává dary Ducha svatého. Chcete taky dostat dárek, nebo se jen dozvědět více o biřmování? Klikněte
                  níže.
                </p>
                <button
                  onClick={() => handleSacramentAction("birmovani")}
                  className="group/btn relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-bold text-sm sm:text-base lg:text-lg rounded-2xl transition-all duration-300 hover:from-amber-800 hover:to-amber-950 hover:scale-105 cursor-pointer shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 w-full sm:w-auto"
                >
                  <span className="relative z-10">Podívej se</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Eucharistie Card */}
            <div className="group relative sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 to-amber-900/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-red-50/40 via-amber-50/40 to-white backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl border border-red-200/40 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] h-full">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 lg:mb-6 bg-gradient-to-r from-red-800 to-amber-900 bg-clip-text text-transparent">
                  Eucharistie
                </h3>
                <p className="text-amber-800/80 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6">
                  Eucharistií člověk přijímá Boha a jeho svatost. Není to jen o tom dát si chlebíček a vínečko, aby
                  nebyl hlad. Pojďte se podívat, co to pro věřící doopravdy znamená a jak můžete jednou i vy přijmout
                  eucharistii.
                </p>
                <button
                  onClick={() => handleSacramentAction("eucharistie")}
                  className="group/btn relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-800 to-amber-900 text-white font-bold text-sm sm:text-base lg:text-lg rounded-2xl transition-all duration-300 hover:from-red-900 hover:to-amber-950 hover:scale-105 cursor-pointer shadow-lg shadow-red-500/20 hover:shadow-red-500/40 w-full sm:w-auto"
                >
                  <span className="relative z-10">Zjistit více</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
            {/* PHOTO GALLERY SECTION */}
      <section className="py-2 sm:py-3 lg:py-12 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-8">
            {/* Photo Card 1 - Křest */}
            <div className="group relative aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/5] rounded-lg lg:rounded-3xl overflow-hidden shadow-md hover:shadow-lg lg:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 hover:-translate-y-0.5 lg:hover:-translate-y-3 hover:scale-[1.005] lg:hover:scale-[1.02]">
              <img src="/images/krst.jpg" alt="Křest" className="absolute inset-0 w-full h-full object-cover" /> 
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-2 sm:bottom-3 lg:bottom-6 left-2 sm:left-3 lg:left-6 right-2 sm:right-3 lg:right-6 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-xl mb-1">Svátost křtu</h3>
                <p className="text-white/90 text-xs sm:text-xs lg:text-sm">Začátek nového života s Bohem</p>
              </div>
            </div>

            {/* Photo Card 2 - Biřmování */}
            <div className="group relative aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/5] rounded-lg lg:rounded-3xl overflow-hidden shadow-md hover:shadow-lg lg:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 hover:-translate-y-0.5 lg:hover:-translate-y-3 hover:scale-[1.005] lg:hover:scale-[1.02]">
              <img src="/images/birm.webp" alt="Biřmování" className="absolute inset-0 w-full h-full object-cover" /> 
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-2 sm:bottom-3 lg:bottom-6 left-2 sm:left-3 lg:left-6 right-2 sm:right-3 lg:right-6 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-xl mb-1">Svátost biřmování</h3>
                <p className="text-white/90 text-xs sm:text-xs lg:text-sm">Potvrzení víry a dary Ducha</p>
              </div>
            </div>

            {/* Photo Card 3 - Eucharistie */}
            <div className="group relative aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/5] rounded-lg lg:rounded-3xl overflow-hidden shadow-md hover:shadow-lg lg:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 hover:-translate-y-0.5 lg:hover:-translate-y-3 hover:scale-[1.005] lg:hover:scale-[1.02] sm:col-span-2 lg:col-span-1">
              <img src="/images/klima.webp" alt="Eucharistie" className="absolute inset-0 w-full h-full object-cover" /> 
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-2 sm:bottom-3 lg:bottom-6 left-2 sm:left-3 lg:left-6 right-2 sm:right-3 lg:right-6 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-xl mb-1">Svátost eucharistie</h3>
                <p className="text-white/90 text-xs sm:text-xs lg:text-sm">Přijímání Božího těla</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JAK ZAČÍT SECTION */}
      <section className="py-2 sm:py-3 lg:py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8 lg:mb-16 text-center lg:text-left lg:pl-[15vw]">
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full mb-3 sm:mb-4 lg:mb-8 mx-auto lg:mx-0"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-900 mb-2 sm:mb-3 lg:mb-6">
              Chci se nechat <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">pokřtít, jak začít??</span>
            </h2>
            <p className="text-base sm:text-lg text-amber-800/70 max-w-3xl leading-relaxed mx-auto lg:mx-0">
              Jednoduché kroky, které tě dovedou k přijetí svátostí a hlubšímu vztahu s Bohem
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
            {/* Krok 1 */}
            <div
              className={`relative transition-all duration-1000 ease-out ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/8 to-amber-800/8 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-3xl border border-amber-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl mb-6 lg:mb-8 shadow-xl">
                  <span className="text-white font-bold text-lg sm:text-2xl">1</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-amber-900 mb-4">Zahoď strach</h3>
                <p className="text-amber-700 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6">
                  Není se čeho bát. Všichni budou šťastní z toho že se chceš nechat pokřtít a pomohou ti jak jen budou moct :).
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
              </div>
            </div>

            {/* Krok 2 */}
            <div
              className={`relative transition-all duration-1000 ease-out ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/8 to-amber-800/8 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-3xl border border-amber-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl mb-6 lg:mb-8 shadow-xl">
                  <span className="text-white font-bold text-lg sm:text-2xl">2</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-amber-900 mb-4">Kontaktuj farnost</h3>
                <p className="text-amber-700 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6">
                  Obrať se na svou místní farnost nebo kontaktuj kněze. Oni ti pomohou s dalšími kroky a přípravou. S tím ti pomůžeme níže ;).
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
              </div>
            </div>

            {/* Krok 3 */}
            <div
              className={`relative transition-all duration-1000 ease-out sm:col-span-2 lg:col-span-1 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/8 to-amber-800/8 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-3xl border border-amber-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl mb-6 lg:mb-8 shadow-xl">
                  <span className="text-white font-bold text-lg sm:text-2xl">3</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-amber-900 mb-4">Začni přípravu</h3>
                <p className="text-amber-700 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6">
                  Zúčastni se přípravných setkání, čti Bibli a modli se. Příprava je klíčová pro prohloubení víry a vztahu s Bohem.
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION FINDER SECTION */}
      <section className="py-2 sm:py-3 lg:py-16 bg-gradient-to-b from-amber-100/50 to-amber-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`mb-4 sm:mb-6 lg:mb-12 transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-6 lg:px-8 py-3 bg-amber-200 text-amber-800 rounded-full font-bold text-base lg:text-lg mb-3 sm:mb-4 lg:mb-8 shadow-lg border border-amber-300">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Najdi společenství
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-900 mb-3 sm:mb-4 lg:mb-8">
              Kde se
              <br />
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                připojit?
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-600 leading-relaxed max-w-4xl mx-auto">
              Najdi farnost nebo křesťanské společenství ve svém okolí.
            </p>
            <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-amber-700 to-amber-900 mx-auto mt-3 sm:mt-4 lg:mt-8 rounded-full"></div>
          </div>

          <div
            className={`max-w-2xl mx-auto mb-3 sm:mb-4 lg:mb-8 transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-6">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="flex-1 px-4 sm:px-6 py-4 sm:py-5 border-2 border-amber-300 rounded-2xl focus:outline-none focus:border-amber-700 focus:ring-4 focus:ring-amber-700/20 bg-white transition-all duration-300 text-base sm:text-lg font-medium"
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
              <button
                onClick={handleSearch}
                className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-2xl font-bold text-base sm:text-lg shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105 flex items-center justify-center w-full sm:w-auto"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Vyhledat
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-800/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-20 shadow-2xl border border-amber-200/50 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center text-amber-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-2xl shadow-amber-500/20">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <p className="text-xl sm:text-2xl font-bold text-amber-800 mb-3 lg:mb-4">Zde by byla interaktivní mapa</p>
                <p className="text-base sm:text-lg text-amber-600">
                  Pro podrobnější informace o farnostech a společenstvích ve vašem okolí
                </p>
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
                    Božííí
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
                <a 
                  href="tel:+420728126406" 
                  className="flex items-center justify-center p-3 lg:p-4 bg-amber-200/30 hover:bg-amber-200/50 rounded-lg transition-all duration-300 group cursor-pointer w-full"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mr-3 lg:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-amber-900 group-hover:text-amber-700 transition-colors text-base lg:text-lg">+420 728 126 406</span>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:zikmundi@pm.me" 
                  className="flex items-center justify-center p-3 lg:p-4 bg-amber-200/30 hover:bg-amber-200/50 rounded-lg transition-all duration-300 group cursor-pointer w-full"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-amber-700 mr-3 lg:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <span className="text-amber-900 group-hover:text-amber-700 transition-colors text-base lg:text-lg">bozisupport@pm.me</span>
                </a>
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
  )
}