import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectStatus } from '../redux/categories/categoriesSlice';

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
