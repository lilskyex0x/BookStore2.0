import React, { PureComponent, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categories from './components/Categories';
import Links from './components/Links';
import BooksContainer from './components/BooksContainer';
import { fetchBooksAsync } from './redux/books/bookSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

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
};
export default App;
