let API_URL = "https://api.themoviedb.org/3";
// const THE_KEY = "570a9bb05ce0caa9d59df8ff3bb73e11";
const BearerToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzBhOWJiMDVjZTBjYWE5ZDU5ZGY4ZmYzYmI3M2UxMSIsIm5iZiI6MTczMDIxMDE4OS43NTg2MTQsInN1YiI6IjY3MjBlNmE0NzY5MTA3ZDc3YjQ4ODVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_nAZTMLFsKJw0BxEuZNwOn4adjGdRID8tbvd4MK3SE";

const config = {
  headers: { Authorization: `Bearer ${BearerToken}` },
};

//upcoming movies
export async function getUpcomingMovie() {
  try {
    const response = await fetch(
      `${API_URL}/movie/upcoming?language=en-US&page=1`,
      config
    );

    if (!response.ok) {
      throw new Error("API does not response");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Upcoming movies couldn't loaded", error);
  }
}

// top rated movies
export async function getTopRatedMovie() {
  try {
    const response = await fetch(`${API_URL}/movie/popular`, config);

    if (!response.ok) {
      throw new Error("API does not response");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Top rated movies couldn't loaded", error);
  }
}

// get movies are playing now
export async function getPlayingNow() {
  try {
    const response = await fetch(
      `${API_URL}/movie/now_playing?language=en-US&page=1`,
      config
    );

    if (!response.ok) {
      throw new Error("API does not response");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("movies couldn't loaded", error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(
      `${API_URL}/movie/${movieId}?language=en-US&append_to_response=videos,credits`,
      config
    );

    if (!response.ok) {
      throw new Error("API does not response");
    }

    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error("movies Detail couldn't loaded", error);
  }
}

// get trending movie for (banner section)
export async function getMovieTrending() {
  try {
    const response = await fetch(
      `${API_URL}/trending/movie/day?language=en-US`,
      config
    );

    if (!response.ok) {
      throw new Error("API does not response");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Trending movie couldn't loaded", error);
  }
}

// display searched movies
export async function getSearchMovies(query) {
  try {
    // Fetch the initial search results
    const response = await fetch(
      `${API_URL}/search/movie?query=${query}&include_adult=false&language=en-US`,
      config
    );

    if (!response.ok) {
      throw new Error("API did not respond correctly");
    }

    const data = await response.json();

    if (data.results) {
      // Fetch runtime for each movie
      const moviesWithRuntime = await Promise.all(
        data.results.map(async (movie) => {
          const runtimeResponse = await fetch(
            `${API_URL}/movie/${movie.id}&language=en-US`,
            config
          );

          const movieDetails = await runtimeResponse.json();
          return {
            ...movie,
            runtime: movieDetails.runtime, // Add runtime to the movie object
          };
        })
      );

      return moviesWithRuntime; // Return movies with runtime
    }
  } catch (error) {
    console.error("Movies couldn't be loaded:", error);
  }
}
