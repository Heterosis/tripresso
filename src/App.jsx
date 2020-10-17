import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loading from 'components/Loading/Loading';
import Title from 'components/Title/Title';
import TourDiv from 'components/TourDiv/TourDiv';
import PageBar from 'components/PageBar/PageBar';
import SortBar from 'components/SortBar/SortBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: '1', sort: 'rating_desc', tourList: [] };
  }

  componentDidMount = () => {
    this.updateTourList();
  }

  updateTourList = () => {
    const { page, sort } = this.state;

    axios.get(`https://interview.tripresso.com/tour/search?page=${page}&row_per_page=10&sort=${sort}`)
      .then((response) => {
        // handle success
        this.setState({ tourList: [...response.data.data.tour_list] });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  prevPageHandler = () => {
    const stateNow = { ...this.state };

    stateNow.page = String(Number(stateNow.page) - 1);

    this.setState(stateNow, this.updateTourList);
  }

  nextPageHandler = () => {
    const stateNow = { ...this.state };

    stateNow.page = String(Number(stateNow.page) + 1);

    this.setState(stateNow, this.updateTourList);
  }

  switchPageHandler = (page) => {
    const stateNow = { ...this.state };

    stateNow.page = String(page);

    this.setState(stateNow, this.updateTourList);
  }

  switchSortHandler = (sortType) => {
    const stateNow = { ...this.state };

    stateNow.sort = sortType;

    this.setState(stateNow, this.updateTourList);
  }

  render() {
    const { tourList, page, sort } = this.state;
    const containerStyle = {
      backgroundColor: '#e6ffff',
    };
    const tourStyle = {
      display: 'block',
    };

    return (
      <Container fluid style={containerStyle}>
        <Title />
        <SortBar sort={sort} switchSort={this.switchSortHandler} />
        <Row style={tourStyle}>
          {_.isEmpty(tourList)
            ? <Loading /> : <TourDiv tourList={tourList} />}
        </Row>
        <PageBar
            page={page}
            switchPage={this.switchPageHandler}
            prevPage={this.prevPageHandler}
            nextPage={this.nextPageHandler}
        />
      </Container>
    );
  }
}

export default App;
