/* eslint-disable react/display-name */
import React from 'react';

import Spinner from '../components/Spinner';

export const withLoading = Component => ({ isLoading, ...rest }) =>
  isLoading ? (
    <div>
      <Component {...rest} />
      <Spinner />
    </div>
  ) : (
    <Component {...rest} />
  );
