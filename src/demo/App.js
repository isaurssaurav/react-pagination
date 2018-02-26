import React from 'react';
import Pagination from '../lib';
import './app.css';

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
        <section className="page-header">
          <h1 className="project-name">React PaginationLibrary</h1>
          <h2 className="project-tagline">
            Pagnation Library component for React Js
          </h2>
          <a href="../" className="btn">
            Back to Home
          </a>
        </section>

        <section className="main-content">
          <div className="container">
            <div className="jojo">
              current Page: <strong>{this.state.currentPage}</strong>
            </div>
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
          </div>
        </section>
      </div>
    );
  }
}
export default App;
