import React from 'react';
import FruitTable from './FruitTable';
import FruitCreator from './FruitCreator';
import './FruitView.css';

class FruitView extends React.Component {

  constructor() {
    super();
    this.endpoint = 'http://localhost:8080/api/f/get?api_key=test';
    this.state = {
      meta: '',
      data: []
    };
  }

  componentDidMount() {
    var self = this;

    fetch(this.endpoint, {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log('parsed json', json);
      self.setState(json);
    }).catch(function(ex) {
      console.log('parsing failed', ex);
    });
  }

  render() {
    var fruits = this.state.data;

    return (
      <div>
        <h3>Fruit View</h3>
        <FruitCreator />
        <FruitTable fruits={fruits} />
      </div>
    );
  }
}

export default FruitView;
