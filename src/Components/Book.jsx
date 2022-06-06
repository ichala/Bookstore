import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;

  return (
    <div>
      {title}
      {' '}
      -
      {' '}
      {author}
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
