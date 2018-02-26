# React-pagination

Simple react pagination library made with https://github.com/DimitriMikadze/create-react-library.git

## Getting Started

Install dependencies

`npm install react-pagination-library`

## Uses

```jsx
import React from "react";
import Pagination from "react-pagination-library";

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
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={10}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
        <h2>current Page:{this.state.currentPage}</h2>
      </div>
    );
  }
}
export default App;
```

## Demo app

Is located inside `src/demo` directory, here you can test your library while developing

## Testing

`npm run test` or `yarn run test`
