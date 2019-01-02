import React from "react";
import Pagination from "../lib";
import "./app.css";

// const App = () => (

class App extends React.Component {
  state = {
    currentPage: 1
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1>React Pagination</h1>
          <p>
            current Page: <strong>{this.state.currentPage}</strong>
          </p>
          <hr />
          <h3>Bottom Border</h3>

          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="bottom-border"
          />

          <h3>Square fill</h3>

          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="square-fill"
          />

          <h3>Square i</h3>

          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="square-i"
          />

          <h3>Circle</h3>

          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="circle"
          />

          <h3>Square</h3>

          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="square"
          />
          <h3>Deafult</h3>
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="default"
          />
        </div>
      </div>
    );
  }
}
export default App;
