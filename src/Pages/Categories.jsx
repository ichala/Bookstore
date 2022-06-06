import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.categories);
  return (
    <div>
      {text}
      <br />
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
}

export default Categories;
