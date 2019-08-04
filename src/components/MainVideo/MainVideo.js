import React, { Component } from 'react';
import './style.css';
import { addVideo } from '../../api';
import YouTube from 'react-youtube';

class MainVideo extends Component {
  state = {
    playing: false,
  };
  // onPlay = () => {
  //   console.log('add to history');
  //   this.setState({ playing: true });
  // };

  render() {
    const { video } = this.props;
    const { playing } = this.state;
    console.log(playing);

    if (!video) {
      return <div className="main-vid">Loading...</div>;
    }
    const videoId = video.id.videoId;

    const videoPlayed = e => {
      const player = e.target;
      console.log('add to history');
      this.setState({ playing: true });

      addVideo({
        id: videoId,
        title: video.snippet.title,
        played: this.state.playing,
      });

      console.log('start play:', player);
    };

    return (
      <div className="main-vid" onClick={videoPlayed}>
        <div onClick={videoPlayed} className="main-video-box">
          <YouTube
            videoId={videoId}
            width="300"
            height="300"
            onPlay={videoPlayed}
          />
        </div>
        <div className="details">
          <div className="text-datails">{video.snippet.title}</div>
          <div className="text-datails">{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default MainVideo;
