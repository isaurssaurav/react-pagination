# React-pagination

Simple react pagination library.

## Demo

[https://isaurssaurav.github.io/react-pagination/](https://isaurssaurav.github.io/react-pagination/)

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

## Params

| Name                | Type     | Default   | Description                                                          |
| ------------------- | -------- | --------- | -------------------------------------------------------------------- |
| `totalPages`        | Number   | `10`      | **Required.** Total number of pages which you are going to display   |
| `currentPage`       | Number   | `1`       | **Required.** Active page number                                     |
| `changeCurrentPage` | Function |           | **Required.** Page change handler. Receive current pageNumber as arg |
| `theme`             | string   | `default` | Themes : default,border-bottom, square-fill, square-i, circle,square |

## Testing

`npm run test` or `yarn run test`
