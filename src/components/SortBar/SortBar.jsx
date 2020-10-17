import './SortBar.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const style = {
  left: '10%',
};

const SortBar = (props) => {
  const { sort, switchSort } = props;
  const sortTypes = ['price_desc', 'price_asc', 'rating_desc', 'rating_asc'];

  return (
    <ButtonGroup size="lg" style={style} className="mb-2">
      {sortTypes.map((sortType) => {
        const variant = sortType === sort ? 'success' : 'light';
        let sortText = '';

        switch (sortType) {
          case 'price_desc':
            sortText = '價格高到低 ↓';
            break;
          case 'price_asc':
            sortText = '價格低到高 ↑';
            break;
          case 'rating_desc':
            sortText = '精選評分高到低 ↓';
            break;
          case 'rating_asc':
            sortText = '精選評分低到高 ↑';
            break;
          default:
            break;
        }

        return (
          <Button
            key={sortType}
            sorttype={sortType}
            variant={variant}
            onClick={() => switchSort(sortType)}
          >
            {sortText}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
export default SortBar;
