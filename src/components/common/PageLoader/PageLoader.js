import React from 'react';
import {Spinner} from 'react-bootstrap';

const PageLoader = ({info}) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">{info}</p>
      </div>
    </div>
  );
};

export default PageLoader;