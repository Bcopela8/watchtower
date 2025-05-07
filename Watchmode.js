const WATCHMODE_API_KEY = 'INSERT_API_KEY';
    export const fetchWatchmodeData = async (movies) => {
      const enrichedMovies = await Promise.all(
        movies.map(async movie => {
          const idRes = await fetch(`https://api.watchmode.com/v1/search/?apiKey=${WATCHMODE_API_KEY}&search_field=name&search_value=${encodeURIComponent(movie.title)}`);
          const idData = await idRes.json();
          if (!idData.title_results || idData.title_results.length === 0) return movie;
          const watchmodeId = idData.title_results[0].id;
    
          const detailRes = await fetch(`https://api.watchmode.com/v1/title/${watchmodeId}/details/?apiKey=${WATCHMODE_API_KEY}&append_to_response=sources`);
          const detailData = await detailRes.json();
    
          return {
            ...movie,
            user_rating: detailData.user_rating,
            sources: detailData.sources || []
          };
        })
      );
      return enrichedMovies;
    };