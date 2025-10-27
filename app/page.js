'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function TravelGuide() {
  const [activeDestination, setActiveDestination] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      image: '🗼',
      description: 'The City of Light beckons with iconic landmarks, world-class museums, and exquisite cuisine.',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Champs-Élysées'],
      bestTime: 'April to June, September to October',
      currency: 'Euro (EUR)',
      language: 'French',
      tips: [
        'Buy museum tickets online to skip long queues',
        'Use the Metro for efficient transportation',
        'Try authentic croissants and baguettes from local boulangeries'
      ]
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      image: '🗾',
      description: 'A fascinating blend of ancient tradition and cutting-edge modernity in the heart of Japan.',
      highlights: ['Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Skytree', 'Tsukiji Market'],
      bestTime: 'March to May, September to November',
      currency: 'Japanese Yen (JPY)',
      language: 'Japanese',
      tips: [
        'Get a JR Pass for unlimited train travel',
        'Learn basic Japanese phrases for better interactions',
        'Cash is still king in many establishments'
      ]
    },
    {
      id: 3,
      name: 'New York City, USA',
      image: '🗽',
      description: 'The city that never sleeps offers endless entertainment, diverse neighborhoods, and iconic skylines.',
      highlights: ['Statue of Liberty', 'Central Park', 'Times Square', 'Brooklyn Bridge'],
      bestTime: 'April to June, September to November',
      currency: 'US Dollar (USD)',
      language: 'English',
      tips: [
        'Buy a MetroCard for subway and bus travel',
        'Explore different neighborhoods for authentic experiences',
        'Book Broadway shows in advance for better seats'
      ]
    },
    {
      id: 4,
      name: 'Barcelona, Spain',
      image: '🏖️',
      description: 'Gaudí\'s masterpieces, Mediterranean beaches, and vibrant nightlife define this Catalan gem.',
      highlights: ['Sagrada Familia', 'Park Güell', 'La Rambla', 'Gothic Quarter'],
      bestTime: 'May to June, September to October',
      currency: 'Euro (EUR)',
      language: 'Spanish, Catalan',
      tips: [
        'Avoid eating at restaurants on La Rambla (tourist traps)',
        'Visit Sagrada Familia early morning or late afternoon',
        'Try tapas at local bars in El Born or Gràcia'
      ]
    },
    {
      id: 5,
      name: 'Bali, Indonesia',
      image: '🏝️',
      description: 'Tropical paradise with stunning beaches, terraced rice paddies, and spiritual temples.',
      highlights: ['Uluwatu Temple', 'Tegalalang Rice Terraces', 'Sacred Monkey Forest', 'Tanah Lot'],
      bestTime: 'April to October (dry season)',
      currency: 'Indonesian Rupiah (IDR)',
      language: 'Indonesian, Balinese',
      tips: [
        'Rent a scooter for easy island exploration',
        'Dress modestly when visiting temples',
        'Negotiate prices at markets and with taxi drivers'
      ]
    },
    {
      id: 6,
      name: 'Dubai, UAE',
      image: '🏙️',
      description: 'Futuristic skyline meets Arabian culture in this luxurious desert metropolis.',
      highlights: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Dubai Marina'],
      bestTime: 'November to March',
      currency: 'UAE Dirham (AED)',
      language: 'Arabic, English',
      tips: [
        'Dress conservatively in public areas',
        'Use ride-hailing apps or metro for transportation',
        'Visit indoor attractions during hot summer months'
      ]
    },
    {
      id: 7,
      name: 'Rome, Italy',
      image: '🏛️',
      description: 'The Eternal City where ancient ruins coexist with Renaissance art and divine cuisine.',
      highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Roman Forum'],
      bestTime: 'April to June, September to October',
      currency: 'Euro (EUR)',
      language: 'Italian',
      tips: [
        'Book Colosseum and Vatican tickets months in advance',
        'Wear comfortable shoes for walking on cobblestones',
        'Toss a coin in Trevi Fountain to ensure your return'
      ]
    },
    {
      id: 8,
      name: 'Sydney, Australia',
      image: '🦘',
      description: 'Harbor city famous for its Opera House, beaches, and laid-back outdoor lifestyle.',
      highlights: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach', 'Royal Botanic Garden'],
      bestTime: 'September to November, March to May',
      currency: 'Australian Dollar (AUD)',
      language: 'English',
      tips: [
        'Take a ferry to Manly for stunning harbor views',
        'Book Opera House tours in advance',
        'Apply sunscreen generously - Australian sun is strong'
      ]
    }
  ];

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>✈️ Global Travel Guide</h1>
        <p className={styles.subtitle}>Discover amazing destinations around the world</p>
        <input
          type="text"
          placeholder="Search destinations..."
          className={styles.searchBar}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className={styles.card}
              onClick={() => setActiveDestination(
                activeDestination?.id === destination.id ? null : destination
              )}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{destination.image}</span>
                <h2 className={styles.destinationName}>{destination.name}</h2>
              </div>
              <p className={styles.description}>{destination.description}</p>

              {activeDestination?.id === destination.id && (
                <div className={styles.details}>
                  <div className={styles.section}>
                    <h3>🎯 Top Highlights</h3>
                    <ul>
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.section}>
                    <h3>📅 Best Time to Visit</h3>
                    <p>{destination.bestTime}</p>
                  </div>

                  <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                      <strong>💵 Currency:</strong> {destination.currency}
                    </div>
                    <div className={styles.infoItem}>
                      <strong>🗣️ Language:</strong> {destination.language}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h3>💡 Travel Tips</h3>
                    <ul>
                      {destination.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <button className={styles.expandButton}>
                {activeDestination?.id === destination.id ? 'Show Less ▲' : 'Learn More ▼'}
              </button>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className={styles.noResults}>
            <p>No destinations found. Try a different search term.</p>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <p>🌍 Explore the world with confidence | Travel responsibly</p>
      </footer>
    </div>
  );
}
