import React, { Component } from 'react';

import Header from './components/Header';

import ProductBox from './components/Consumindo';

class App extends Component {
  render() {
    return (
        <div className="container">
          <Header title="Web-Scraping and React and JSon" />
          <br />
          <ProductBox />
        </div>
    );
  }
}

export default App;
