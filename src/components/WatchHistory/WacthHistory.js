import React, { Component } from 'react';
import { getVideos, remove } from '../../api';
import './style.css';

class WacthHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      // played: false,
    };
  }

  componentDidMount() {
    getVideos
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load data!');
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  handleClick = id => {
    console.log(id);
    remove(id);
  };

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div className="watched-hisory">Data loading... ;(</div>;
    } else {
      return (
        <div className="watched-hisory">
          {items.map(item => (
            <div className="story-item" key={item.id}>
              <p>{item.title}</p>
              <p>{item.id}</p>

              <p>{JSON.stringify(item.played)}</p>
              <button value={item.id} onClick={this.handleClick}>
                Delete
              </button>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default WacthHistory;
