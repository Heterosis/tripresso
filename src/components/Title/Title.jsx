import './Title.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const divStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Title = () => (
  <Jumbotron fluid>
    <Container style={divStyle}>
      <h1>Tripresso</h1>
    </Container>
  </Jumbotron>
);

export default Title;
