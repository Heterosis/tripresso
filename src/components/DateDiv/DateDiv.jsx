import './DateDiv.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const newTabHandler = (url) => {
  window.open(url, '_blank');
};

const dateRowStyle = {
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'nowrap',
};

const dateColStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const dateBtnDateStyle = { flexGrow: '3' };
const dateBtnQtyStyle = { flexGrow: '1' };
const moreBtnStyle = { height: '100%' };

const DateDiv = (props) => {
  const { group, detailUrl } = props;

  return (
    <Row style={dateRowStyle}>
      {group.slice(0, 3).map((eachGroup) => (
        <Col key={eachGroup.date} onClick={() => newTabHandler(detailUrl)} style={dateColStyle}>
          <Button variant="link" style={dateBtnDateStyle}>{eachGroup.date}</Button>
          <Button variant="outline-primary" style={dateBtnQtyStyle}>
            可售
            {eachGroup.quantity}
            位
          </Button>
        </Col>
      ))}
      <Col>
        <Button variant="outline-primary" onClick={() => newTabHandler(detailUrl)} style={moreBtnStyle}>更多日期</Button>
      </Col>
    </Row>
  );
};
export default DateDiv;
