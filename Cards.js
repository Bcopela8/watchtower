import React from 'react';
import './Cards.css';

const allowedSources = [
  'Netflix',
  'Amazon Prime Video',
  'HBO Max',
  'Peacock',
  'Hulu',
  'AppleTV+',
  'Disney+',
  'Paramount+',
  'Showtime',
  'Tubi TV',
  'Pluto TV',
  'The Roku Channel',
  'Crunchyroll',
  'YouTube',
  'AMC+',
  'Starz',
  'Sling TV',
  'BBC America',
  'PBS',
  'Shudder',
  'Hallmark Movies Now',
  'Kanopy',
  'MGM+',
  'Cinemax',
  'fuboTV',
  'NOW TV'
];

const sourceIcons = {
  'Netflix': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'Amazon Prime Video': 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
  'HBO Max': 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
  'Peacock': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Peacock_Logo_2020.svg',
  'Hulu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hulu_logo_%282018%29.svg/1200px-Hulu_logo_%282018%29.svg.png',
  'AppleTV+': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/AppleTV%2B_Logo.svg',
  'Disney+': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
  'Paramount+': 'https://upload.wikimedia.org/wikipedia/commons/9/92/Paramount%2B_logo.svg',
  'Showtime': 'https://upload.wikimedia.org/wikipedia/commons/2/22/Showtime.svg',
  'Tubi TV': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tubi_logo_2024_purple.svg/1200px-Tubi_logo_2024_purple.svg.png?20240305000355',
  'Pluto TV': 'https://upload.wikimedia.org/wikipedia/commons/7/75/Pluto_TV_Logo_2020.svg',
  'The Roku Channel': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Roku_Logo.svg',
  'Crunchyroll': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Crunchyroll_Logo.svg',
  'YouTube': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
  'AMC+': 'https://upload.wikimedia.org/wikipedia/commons/b/bf/AMC%2B_Logo.svg',
  'Starz': 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Starz_2022.svg',
  'Sling TV': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Sling_TV_logo_2022.svg',
  'BBC America': 'https://upload.wikimedia.org/wikipedia/commons/4/44/BBC_America_logo_2021.svg',
  'PBS': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/PBS_Logo.svg',
  'Shudder': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Shudder_logo.svg',
  'Hallmark Movies Now': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Hallmark_channel_logo.svg',
  'Kanopy': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Kanopy_logo.svg',
  'MGM+': 'https://upload.wikimedia.org/wikipedia/commons/4/4f/MGM_Plus_logo.svg',
  'Cinemax': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Cinemax_logo_2020.svg',
  'fuboTV': 'https://upload.wikimedia.org/wikipedia/commons/1/12/FuboTV_logo.svg',
  'NOW TV': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Now_logo.svg/2560px-Now_logo.svg.png'
};

const Cards = ({ movie }) => {
  const matchedSources = [];
  movie.sources?.forEach(source => {
    const matchedPlatform = allowedSources.find(platform =>
      source.name.toLowerCase().includes(platform.toLowerCase())
    );
    if (matchedPlatform && !matchedSources.some(s => s.name === matchedPlatform)) {
      matchedSources.push({ name: matchedPlatform, icon: sourceIcons[matchedPlatform] });
    }
  });

  return (
    <div className="card">
      <img src={movie.poster} alt={movie.title} className="poster" />
      <h3>{movie.title}</h3>
      <p>User Rating: ⭐{movie.user_rating || 'N/A'} stars</p>
      <ul className="sources">
        {matchedSources.map((source, index) => (
          <li key={index}>
            <img src={source.icon} alt={source.name} className="icon" />
            {source.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;