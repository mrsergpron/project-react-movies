import React, { Component } from "react";
import styles from "./Search.module.scss";

class Search extends Component {
  state = { search: "", type: "all" };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleButtonClick = () => {
    this.props.search(this.state.search, this.state.type);
  };
  handleEnter = (event) => {
    if (event.key === "Enter") {
      return this.props.search(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.search(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <div className={styles.search}>
          <input
            type="search"
            placeholder="Search ..."
            value={this.state.search}
            onChange={this.handleSearch}
            onBlur={() => this.props.search(this.state.search)}
            onKeyDown={this.handleEnter}
          />
          <button onClick={this.handleButtonClick}>Search</button>
        </div>

        <div className={styles.filter}>
          <label>
            <input
              type="radio"
              name="all"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="movie"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            Movies only
          </label>
          <label>
            <input
              type="radio"
              name="series"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            Series only
          </label>
        </div>
      </>
    );
  }
}

export { Search };
