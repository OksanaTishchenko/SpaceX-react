import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';

import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };

  componentDidMount() {
    // this.fetchData.getRocket().then(data => console.log(data))
    this.updateRocket();
    console.log(this.state);
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) })
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(features => {
        this.setState({ rocketFeatures: features });
      });
  }

  changeRocket = (nameRocket) => {
    this.setState({ rocket: nameRocket }, this.updateRocket); // вызываем updateRocket потому что поменялись свойства, и нужно обновить данные т.к. в стейте рокет поменялся 

  }

  render() {

    //console.log(this.state);

    return (
      <React.Fragment>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        <Features />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
