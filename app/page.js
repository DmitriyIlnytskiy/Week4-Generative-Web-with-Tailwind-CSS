// app/page.js

// This is CRITICAL! It tells Next.js this is an interactive
// component that runs in the browser, not just on the server.
"use client";

import { useState, useEffect } from 'react';

// This is the main component for our page
export default function Home() {
  // --- STATE ---
  // 'search' holds the text in the search bar
  const [search, setSearch] = useState('');
  
  // 'games' holds the list of games we get from the API
  const [games, setGames] = useState([]);
  
  // 'particles' holds the list of particles for the background
  const [particles, setParticles] = useState([]);

  // --- API KEY ---
  // Get the API key we stored in .env.local
  // Make sure you have created your .env.local file!
  const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

  // --- EFFECTS ---
  // This one runs ONCE when the page loads
  useEffect(() => {
    // 1. Fetch a default list of popular games on load
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=9`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
      });

    // 2. Create the particles for the background
    let particleArray = [];
    for (let i = 0; i < 25; i++) {
      particleArray.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        size: Math.random() * 3 + 1,
        duration: `${Math.random() * 20 + 10}s`,
        delay: `${Math.random() * -20}s`,
      });
    }
    setParticles(particleArray);
  }, [API_KEY]); // We add API_KEY here as a dependency

  // --- FUNCTIONS ---
  // This function runs when the user submits the search form
  const handleSearch = (e) => {
    e.preventDefault(); // Stop the page from reloading

    // Fetch games from the API based on the search term
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${search}&page_size=9`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
      });
  };


  const clearSearch = () => {
    setSearch('');
    // We can re-fetch the default popular games list
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=9`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
      });
  };


  return (
    <div className="min-h-screen p-8">
      {/* Particle Background */}
      <div className="particle-background">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <header className="text-center my-16">
        <h1 className="text-5xl font-bold uppercase tracking-wider text-white" style={{ textShadow: '0 0 10px #ff003c' }}>
          Neon Game Hub
        </h1>
        <p className="text-xl text-gray-400 mt-2">Your Futuristic Game Library</p>
      </header>

      {/* Core Feature: Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center gap-4 mb-12">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a game..."
          className="w-full max-w-lg p-3 bg-gray-900 border-2 border-neon text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neon"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-neon text-gray-900 font-bold rounded-lg hover:bg-opacity-80 transition-all"
        >
          Search
        </button>
        {/* Core Feature: Interactive Element (Clear) */}
        <button
          type="button"
          onClick={clearSearch}
          className="px-6 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-all"
        >
          Clear
        </button>
      </form>

      {/* Core Feature: Results Section */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* We loop over the 'games' state and create a card for each one */}
        {games && games.map((game) => (
          <div
            key={game.id}
            className="flex flex-col bg-gray-900 bg-opacity-80 border border-neon rounded-lg overflow-hidden shadow-lg shadow-neon/20 transition-all hover:shadow-neon/40 hover:-translate-y-1"
          >
            {/* Live Data: Image (check if it exists) */}
            {game.background_image ? (
              <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 object-cover bg-gray-700 flex items-center justify-center text-gray-400">No Image</div>
            )}
            
            <div className="p-6 flex flex-col flex-grow">
              {/* Live Data: Title */}
              <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
              
              {/* Live Data: Rating */}
              <p className="text-neon mb-4">Rating: {game.rating} / 5</p>
              
              {/* Live Data: Genres */}
              <div className="flex flex-wrap gap-2 mb-4">
                {game.genres.map((genre) => (
                  <span key={genre.id} className="px-3 py-1 bg-gray-700 text-xs text-gray-300 rounded-full">
                    {genre.name}
                  </span>
                ))}
              </div>
              
              {/* This pushes the button to the bottom */}
              <a 
                href={`https://rawg.io/games/${game.slug}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-auto w-full text-center px-4 py-2 bg-neon text-gray-900 font-bold rounded-lg hover:bg-opacity-80 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}