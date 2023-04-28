import React, { Component } from "react";
import { ListMovie } from "../components/ListMovie";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import styles from "./Main.module.scss";

class Main extends Component {
  constructor() {
    super();
    this.API_KEY = process.env.REACT_APP_API_KEY;
  }
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${this.API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovie = (str, type = "all") => {
    this.setState({ loading: false });
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${this.API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };
  render() {
    const { movies, loading } = this.state;
    return (
      <main>
        <Search search={this.searchMovie} />

        {loading ? <Preloader /> : <ListMovie movies={this.state.movies} />}
      </main>
    );
  }
}

export { Main };
