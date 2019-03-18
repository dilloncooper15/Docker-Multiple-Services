import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Welcome to the other page!
      <Link to="/">Go back home to home page!</Link>
    </div>
  );
};