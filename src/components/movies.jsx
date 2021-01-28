import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from '../utils/paginate';
class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage:1,
    pageSize: 5,
  };

  handleDelete = (movie) => {
   
    const movies = this.state.movies.filter((m) => m.title !== movie.title);

    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].isLiked = !movies[index].isLiked;
    console.log(movies[index].isLiked);
    this.setState({ movies });
  };

  handlePageChange = page => {

    this.setState({currentPage:page})
  }
  renderMovie() {}
  render() {

    const { length: count } = this.state.movies;
    const {currentPage,pageSize,movies:allMovies} = this.state;
    if (count === 0) return <h3>No Movies in the database</h3>;

     const movies = paginate(allMovies,currentPage,pageSize);


    return (
      <div>
        <p>showing {count}movies in the database </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">like</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.dailyrentalRate}</td>
                <td>
                  <Like
                    onClick={() => this.handleLike(movie)}
                    liked={movie.isLiked}
                  ></Like>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={5}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        ></Pagination>
      </div>
    );
  }
}

export default Movies;
