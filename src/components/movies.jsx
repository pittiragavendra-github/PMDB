import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    console.log(movie.title);
    const movies = this.state.movies.filter((m) => m.title !== movie.title);

    this.setState({ movies: movies });
  };

  renderMovie() {}
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <h3>No Movies in the database</h3>;

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
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.dailyrentalRate}</td>
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
      </div>
    );
  }
}

export default Movies;
