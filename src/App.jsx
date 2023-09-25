import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Links from './components/Links';
import BooksContainer from './components/BooksContainer';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Links />}>
              <Route index element={<BooksContainer />} />
              <Route path="categories" element={<Categories />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
