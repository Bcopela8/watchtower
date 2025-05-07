const TMDB_API_KEY = 'INSERT_API_KEY';

export const fetchTMDBMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results.map(movie => ({
    tmdb_id: movie.id,
    title: movie.title,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  }));
};
