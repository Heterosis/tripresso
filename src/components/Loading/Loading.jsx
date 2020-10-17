import './Loading.css';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const divStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Loading = () => (
  <div style={divStyle}>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
