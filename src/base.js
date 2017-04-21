import { h, render } from 'preact';

import s from './base.css';
const data = require('../data/data.json');

export default class Base {

  constructor() {
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    this.setData();
  }

  setData() {
    let dataExists = true;
    let interactiveData;
    let dataUri;
    try {
      if (cronica_transmedia_data) {
        dataExists = true;
        interactiveData = cronica_transmedia_data;
      }
    } catch (e) {
      dataExists = false;
    }

    if (!dataExists) {
      this.setState({data: data});
    } else {
      if (interactiveData.dataUri) {
        dataUri = interactiveData.dataUri;
        this.fetchData(dataUri);
      }
    }
  }

  fetchData(uri) {
    fetch(uri)
      .then((response) => {
        return response.json()
    }).then((json) => {
      this.setState({ data: json });
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  render(props, state) {
    return(
      <div className={s.container}>

      </div>
    )
  }
}