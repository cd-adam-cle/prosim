"use client";

import React, { useState } from 'react';

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleNavigate = (path: string) => {
    // In a real app, this would use React Router
    console.log(`Navigating to: ${path}`);
    window.location.href = path;
  };

  const handleSearch = () => {
    if (selectedRegion) {
      console.log(`Searching for communities in: ${selectedRegion}`);
      // In a real app, this would perform the search
      alert(`Vyhledávání společenství v kraji: ${selectedRegion}`);
    } else {
      alert('Prosím vyberte kraj před vyhledáváním.');
    }
  };

  const handleSacramentAction = (sacrament: string) => {
    console.log(`Starting preparation for: ${sacrament}`);
    switch(sacrament) {
      case 'krest':
        handleNavigate('/krest');
        break;
      case 'birmovani':
        handleNavigate('/birmovani');
        break;
      case 'eucharistie':
        handleNavigate('/eucharistie');
        break;
      default:
        console.log('Unknown sacrament');
    }
  };

  const handleGuideAction = (action: string) => {
    console.log(`Guide action: ${action}`);
    switch(action) {
      case 'learn-more':
        handleNavigate('/pruvodce');
        break;
      case 'continue':
        handleNavigate('/pruvodce');
        break;
      case 'eucharist-info':
        handleNavigate('/eucharistie');
        break;
      default:
        handleNavigate('/pruvodce');
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 scroll-smooth">
      {/* Reverent Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-3xl border-b border-stone-200/50 z-50 transition-all duration-700">
        <div className="max-w-8xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Traditional Logo */}
            <div className="flex items-center space-x-5">
              <button 
                onClick={() => handleNavigate('/')} 
                className="group relative cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105">
                  <svg className="w-9 h-9 text-white" viewBox="0 0 128 128" fill="currentColor">
                    <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8"/>
                    <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2"/>
                    <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z"/>
                    <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z"/>
                  </svg>
                </div>
              </button>
              <button 
                onClick={() => handleNavigate('/')} 
                className="text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight hover:from-slate-700 hover:to-slate-800 transition-all duration-500 cursor-pointer"
              >
                Boží
              </button>
            </div>
            
            {/* Refined Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button 
                onClick={() => handleNavigate('/')} 
                className="group relative px-6 py-3 text-slate-700 hover:text-slate-900 font-medium text-lg transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10">Úvod</span>
                <div className="absolute inset-0 bg-stone-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </button>
              <button 
                onClick={() => handleNavigate('/pruvodce')} 
                className="group relative px-6 py-3 text-slate-700 hover:text-slate-900 font-medium text-lg transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10">Průvodce</span>
                <div className="absolute inset-0 bg-stone-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </button>
              
              {/* Refined Dropdown */}
              <div className="relative group">
                <button className="group relative px-6 py-3 text-slate-700 hover:text-slate-900 font-medium text-lg transition-all duration-300 flex items-center cursor-pointer">
                  <span className="relative z-10">Svátosti</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-stone-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                </button>
                
                <div className="absolute top-full left-0 mt-4 w-72 bg-white/98 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-200/30 border border-stone-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4 space-y-2">
                    <button 
                      onClick={() => handleNavigate('/krest')} 
                      className="block w-full text-left px-6 py-4 text-slate-700 hover:text-slate-900 hover:bg-stone-100/80 rounded-2xl transition-all duration-300 font-medium text-lg cursor-pointer"
                    >
                      Křest
                    </button>
                    <button 
                      onClick={() => handleNavigate('/birmovani')} 
                      className="block w-full text-left px-6 py-4 text-slate-700 hover:text-slate-900 hover:bg-stone-100/80 rounded-2xl transition-all duration-300 font-medium text-lg cursor-pointer"
                    >
                      Biřmování
                    </button>
                    <button 
                      onClick={() => handleNavigate('/eucharistie')} 
                      className="block w-full text-left px-6 py-4 text-slate-700 hover:text-slate-900 hover:bg-stone-100/80 rounded-2xl transition-all duration-300 font-medium text-lg cursor-pointer"
                    >
                      Eucharistie
                    </button>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => handleNavigate('/spolecenstvi')} 
                className="group relative px-6 py-3 text-slate-700 hover:text-slate-900 font-medium text-lg transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10">Společenství</span>
                <div className="absolute inset-0 bg-stone-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Reverent Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100/40 via-white to-stone-50/40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          {/* Reverent Icon */}
          <div className="mb-12 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/20">
              <svg className="w-16 h-16 text-white" viewBox="0 0 128 128" fill="currentColor">
                <path d="M59.9,81.6C23.3,52,35.6,16.5,35.6,16.5s47.6,18.8,65.8,41.8"/>
                <path d="M79.5,52c17.7-34.6,39.8-9.7,39.8-9.7c-10.4,4.9-4.1,26.3-18.7,47.6c-10.5,15.3-24.7,14.9-46.4,18.7c-7.6,1.3-17.4,9.9-17.4,9.9c-13.3-9.2-25.2-18.9-27.6-32.9L52,78.2"/>
                <path d="M46.2,88.4c-40.8-23.6-34-60.7-34-60.7s50,11.2,71.5,31.1L46.2,88.4z"/>
                <path d="M31.6,33.1c-11.2-3.5-19.4-5.4-19.4-5.4s-6.7,37,34,60.7l0,0C65.8,72.9,32.1,44.2,31.6,33.1z"/>
              </svg>
            </div>
          </div>

          {/* Reverent Headline - Flex Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8">
            <div className="text-7xl lg:text-8xl font-black leading-tight">
              <span className="block text-slate-900 mb-4">Přijmout</span>
              <span className="block bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent">svátost</span>
            </div>
            <div className="text-6xl lg:text-7xl font-light text-slate-400">nebo</div>
            <div className="text-7xl lg:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent mb-4">prohloubit</span>
              <span className="block text-slate-900">svou víru</span>
            </div>
          </div>
          
          <p className="text-2xl lg:text-3xl text-slate-600 font-light mb-16 max-w-4xl mx-auto leading-relaxed">
            Ať jsi na začátku cesty, nebo na návratu
          </p>

          {/* Reverent CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => handleNavigate('/pruvodce')} 
              className="group relative px-12 py-5 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-slate-500/20 hover:shadow-slate-500/30 transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <span className="relative z-10">Začít cestu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button 
              onClick={() => handleNavigate('/pruvodce')} 
              className="group relative px-12 py-5 bg-white border-2 border-stone-300 text-slate-700 font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-slate-400 cursor-pointer"
            >
              <span className="relative z-10">Více informací</span>
            </button>
          </div>
        </div>
      </section>

      {/* Reverent Sacraments Section */}
      <section className="py-32 bg-gradient-to-b from-stone-100/50 to-white">
        <div className="max-w-8xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-3 bg-stone-200 text-slate-800 rounded-full font-bold text-lg mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Svátosti
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-slate-900 mb-8">
              Základní kroky
              <br />
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">v víře</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto rounded-full"></div>
          </div>

          {/* Reverent Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Křest Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/8 to-slate-800/8 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-12 rounded-3xl border border-stone-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-slate-500/20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">Křest</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Křest je první svátost, která otevírá cestu k Bohu. Je to symbolické 
                  očištění a přijetí do křesťanského společenství.
                </p>
                <button 
                  onClick={() => handleSacramentAction('krest')} 
                  className="group/btn relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-stone-200 to-stone-300 text-slate-800 font-bold rounded-2xl transition-all duration-300 hover:from-stone-300 hover:to-stone-400 hover:scale-105 cursor-pointer"
                >
                  <span className="relative z-10">Chci se nechat pokřtít</span>
                  <svg className="w-5 h-5 ml-3 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Biřmování Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700/8 to-amber-900/8 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-12 rounded-3xl border border-stone-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-amber-700/20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">Biřmování</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Biřmování posiluje křestní milost a dává dary Ducha svatého. 
                  Je to potvrzení osobní víry a odpovědnosti.
                </p>
                <button 
                  onClick={() => handleSacramentAction('birmovani')} 
                  className="group/btn relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 font-bold rounded-2xl transition-all duration-300 hover:from-amber-200 hover:to-amber-300 hover:scale-105 cursor-pointer"
                >
                  <span className="relative z-10">Chci se nechat biřmovat</span>
                  <svg className="w-5 h-5 ml-3 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Eucharistie Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/8 to-red-900/8 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-12 rounded-3xl border border-stone-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-red-800 to-red-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-red-800/20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546V6.454c.523 0 1.046-.151 1.5-.454a2.704 2.704 0 013 0 2.704 2.704 0 003 0 2.704 2.704 0 013 0 2.704 2.704 0 003 0 2.704 2.704 0 013 0A2.704 2.704 0 0021 6.454v9.092z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">Eucharistie</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Eucharistie je vrchol křesťanského života. Setkání s Kristem 
                  pod způsobou chleba a vína jako zdroj duchovní síly.
                </p>
                <button 
                  onClick={() => handleSacramentAction('eucharistie')} 
                  className="group/btn relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-100 to-red-200 text-red-900 font-bold rounded-2xl transition-all duration-300 hover:from-red-200 hover:to-red-300 hover:scale-105 cursor-pointer"
                >
                  <span className="relative z-10">Chci přijmout eucharistii</span>
                  <svg className="w-5 h-5 ml-3 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section - Church Appropriate */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-3 bg-sage-100 text-slate-800 rounded-full font-bold text-lg mb-8 shadow-lg border border-stone-200">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
              Průvodce
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-slate-900 mb-8">
              Najdi si
              <br />
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">svou cestu</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Vyber si možnost, která nejlépe odpovídá tvé současné situaci.
            </p>
          </div>

          {/* Path Cards */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Path 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/8 to-slate-800/8 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-12 rounded-3xl border border-stone-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-500/20">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
                  Zajímá mě křest<br />
                  chci se víc dozvědět
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  Prozkoumej základní informace o křtu a dalších krocích víry.
                </p>
                <button 
                  onClick={() => handleGuideAction('learn-more')} 
                  className="group/btn inline-flex items-center text-slate-700 font-bold text-lg hover:text-slate-900 transition-colors duration-300 cursor-pointer"
                >
                  <span>Zjistit více</span>
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Path 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700/8 to-amber-900/8 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-12 rounded-3xl border border-stone-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-700 to-amber-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-amber-700/20">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
                  Byl jsem pokřtěn<br />
                  chci pokračovat
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  Objev další svátosti a možnosti prohloubení tvé víry.
                </p>
                <button 
                  onClick={() => handleGuideAction('continue')} 
                  className="group/btn inline-flex items-center text-amber-800 font-bold text-lg hover:text-amber-900 transition-colors duration-300 cursor-pointer"
                >
                  <span>Pokračovat</span>
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Path 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/8 to-red-900/8 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-12 rounded-3xl border border-stone-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-800 to-red-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-red-800/20">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
                  Chci vědět o<br />
                  eucharistii více
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  Získej jasné informace o eucharistii a přípravě na ni.
                </p>
                <button 
                  onClick={() => handleGuideAction('eucharist-info')} 
                  className="group/btn inline-flex items-center text-red-800 font-bold text-lg hover:text-red-900 transition-colors duration-300 cursor-pointer"
                >
                  <span>Zjistit více</span>
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Location Finder - Reverent Design */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="mb-20">
            <div className="inline-flex items-center px-8 py-3 bg-stone-200 text-slate-800 rounded-full font-bold text-lg mb-8 shadow-lg border border-stone-300">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Najdi společenství
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-slate-900 mb-8">
              Kde se
              <br />
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">připojit?</span>
            </h2>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Najdi farnost nebo křesťanské společenství ve svém okolí.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex gap-6">
              <select 
                className="flex-1 px-8 py-6 bg-white border-2 border-stone-300 rounded-2xl focus:outline-none focus:border-slate-500 text-lg font-medium shadow-xl transition-all duration-300 cursor-pointer"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="">Vyber kraj</option>
                <option value="praha">Praha</option>
                <option value="stredocesky">Středočeský</option>
                <option value="jihocesky">Jihočeský</option>
                <option value="plzensky">Plzeňský</option>
                <option value="karlovarsky">Karlovarský</option>
                <option value="ustecky">Ústecký</option>
                <option value="liberecky">Liberecký</option>
                <option value="kralovehradecky">Královéhradecký</option>
                <option value="pardubicky">Pardubický</option>
                <option value="vysocina">Vysočina</option>
                <option value="jihomoravsky">Jihomoravský</option>
                <option value="olomoucky">Olomoucký</option>
                <option value="zlinsky">Zlínský</option>
                <option value="moravskoslezsky">Moravskoslezský</option>
              </select>
              <button 
                onClick={handleSearch} 
                className="px-10 py-6 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold rounded-2xl shadow-2xl shadow-slate-500/20 hover:shadow-slate-500/30 transition-all duration-500 hover:scale-105 flex items-center cursor-pointer"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Vyhledat
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-400/8 to-slate-500/8 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-stone-200/50 to-stone-300/30 rounded-3xl p-20 h-96 flex items-center justify-center shadow-2xl border border-stone-200/50">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-stone-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-slate-600">Zde by byla interaktivní mapa</p>
                <p className="text-lg text-slate-500 mt-4">Pro podrobnější informace o farnostech ve vašem okolí</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}