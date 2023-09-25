/* eslint-disable */
import React from 'react';
import { selectStatus } from '../redux/categories/categoriesSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Categories = () => {
  const status = useSelector(selectStatus);

  const handleClick = () => {
    alert(`Status: ${status}`);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
