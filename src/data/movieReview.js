const fetch = require('node-fetch');
const { dummy } = require("../data/movieNowPlaying.js");

async function MovieReview(id) {
  const movie = dummy.results.find((item) => item.id === parseInt(id));
  if (!movie) {
    throw new Error('Movie not found');
  }

  const url = 'https://api.themoviedb.org/3/movie/' + movie.id + '/reviews?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDk5ODA1NTg5OWQyNWIyMjVmNGU0MzVlZjQyMjUxZCIsIm5iZiI6MTcyMDA2OTg3MS4zNTA4MTksInN1YiI6IjY2ODRkZTk2ZjY4MTNlNDE5MzhmMWYwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vpyM8KKnVskCFGIWCaAXkfRQMSUToSR7IxnbdbUtMbU'
    }
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
}

module.exports = MovieReview;
