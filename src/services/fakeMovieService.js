import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b2166ca3eeb7f6fbccd471815",
    title: "The Matrix  ",
    genre: { _id: "5b2166ca3eeb7f6fbccd471815", name: "Action" },
    numberInStock: 218,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:true
  },
  {
    _id: "5b3166ca3eeb7f6fbccd471815",
    title: "The Matrix reloded  ",
    genre: { _id: "5b3166ca3eeb7f6fbccd471815", name: "Action" },
    numberInStock: 218,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:true
  },
  {
    _id: "5b9166ca3eeb7f6fbccd471815",
    title: "English viglish",
    genre: { _id: "5b9166ca3eeb7f6fbccd471815", name: "Action" },
    numberInStock: 218,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:true
  },
  {
    _id: "5b2166ca3eeb7f6fbccd471815",
    title: "The Matrix  ",
    genre: { _id: "5b2166ca3eeb7f6fbccd471815", name: "Action" },
    numberInStock: 218,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:true
  },
  {
    _id: "5b3166ca3eeb7f6fbccd471815",
    title: "The Matrix reloded  ",
    genre: { _id: "5b3166ca3eeb7f6fbccd471815", name: "Action" },
    numberInStock: 218,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:true
  },
  {
    _id: "5b9166ca3eeb7f6fbccd471815",
    title: "English viglish",
    genre: { _id: "5b9166ca3eeb7f6fbccd471815", name: "Action" },
    numberInStock: 218,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:true
  },
  {
    _id: "5b9166ca3eeb7f6fbccd471815",
    title: "English viglish",
    genre: { _id: "5b9166ca3eeb7f6fbccd471815", name: "Action" },
    numberInStock: 218,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:true
  },
  {
    _id: "5b21c6a3eeb7f6fbccd471815",
    title: "Titnic",
    genre: { _id: "5b21c6a3eeb7f6fbccd471815", name: "Comedy" },
    numberInStock: 16,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:false
  },
  {
    _id: "66b21ca3eeb7f6fbccd471815",
    title: "Red",
    genre: { _id: "66b21ca3eeb7f6fbccd471815", name: "Thriller" },
    numberInStock: 1,
    dailyrentalRate: 2.5,
    publishdate: "2018-01-03T19:04:28:809Z",
    isLiked:true
  },
  {
    _id: "6b21ca3eeb7f6fbccd471815",
    title: "Avatar",
    genre: { _id: "6b21ca3eeb7f6fbccd471815", name: "Thriller" },
    numberInStock: 6,
    dailyrentalRate: 4.5,
    publishdate: "2018-01-03T19:04:28:809Z",
  },
];

export function getMovies() {
  return movies;
}
export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genre._id);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyrentalRate = movie.dailyrentalRate;
}
