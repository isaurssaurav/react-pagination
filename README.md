# React-pagination

Simple react pagination library.

## Getting Started

Install dependencies

`npm install react-pagination-library` or `npm install react-pagination-library --save`

## Uses

```jsx
import React from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

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

## Option/Props

* `currentPage : current page in pagination`
* `totalPages : Total page in data`
* `changeCurrentPage : call when click in any button in pagination. Returns clicked button's number`
* `theme : theme for pagiantion. Choose from following`
  * border-bottom
  * square-fill
  * square-i (default)
  * circle
  * square

## Demo app

Is located inside `src/demo` directory, here you can test your library while developing

## Testing

`npm run test` or `yarn run test`
