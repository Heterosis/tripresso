import './TourCard.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import DateDiv from 'components/DateDiv/DateDiv';
import StarRatingComponent from 'react-star-rating-component';

const TourCard = (props) => {
  const { tourData } = props;
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  };
  const imgStyle = {
    width: '30%',
    objectFit: 'cover',
  };
  const priceStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  };
  const highlightTextStyle = {
    color: '#cc6600',
  };

  return (
    <div className="mb-2">
      <Card style={cardStyle} className="py-2 px-2">
        <Card.Img src={tourData.image_url} style={imgStyle} />
        <Card.Body>
          <Row style={cardStyle} className="ml-1">
            <span className="mr-2">{tourData.agency}</span>
            <StarRatingComponent
              name={tourData.id}
              starCount={5}
              editing={false}
              value={tourData.rating}
            />
          </Row>
          <Card.Title>{tourData.title}</Card.Title>
          <Card.Text>
            {tourData.tags.map((tag) => (
              <Badge key={tag} variant="info" className="mr-1">
                {tag}
              </Badge>
            ))}
          </Card.Text>
          <Row>
            <Col sm={9}>
              <DateDiv group={tourData.group} detailUrl={tourData.tour_detail_url} />
            </Col>
            <Col sm={3} style={priceStyle}>
              <h5>
                <span style={highlightTextStyle}>{tourData.tour_days}</span>
                {' '}
                天
                {' '}
                <span style={highlightTextStyle}>{tourData.min_price}</span>
                {' '}
                元起
              </h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TourCard;
