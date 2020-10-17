import './PageBar.css';
import React from 'react';
import _ from 'lodash';
import Pagination from 'react-bootstrap/Pagination';

const PageBar = (props) => {
  const {
    page, prevPage, nextPage, switchPage,
  } = props;

  const firstPage = page === '1';
  const lastPage = page === '10';
  const pages = _.range(1, 11);
  const style = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Pagination style={style}>
      <Pagination.Prev onClick={prevPage} disabled={firstPage} />
      {pages.map((eachPage) => {
        const active = page === String(eachPage);

        return (
          <Pagination.Item onClick={() => switchPage(eachPage)} active={active} key={eachPage}>
            {eachPage}
          </Pagination.Item>
        );
      })}
      <Pagination.Next onClick={nextPage} disabled={lastPage} />
    </Pagination>
  );
};
export default PageBar;
