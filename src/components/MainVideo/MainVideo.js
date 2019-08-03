import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './style.css';
import { addVideo } from '../../api';
import YouTube from 'react-youtube';

class MainVideo extends Component {
  state = {
    playing: false,
  };
  onPlay = () => {
    console.log('add to history');
    this.setState({ playing: true });
  };

  render() {
    const { video } = this.props;
    const { playing } = this.state;
    console.log(playing);

    if (!video) {
      return <div className="main-vid">Loading...</div>;
    }
    const videoId = video.id.videoId;
    // const url = `https://www.youtube.com/embed/${videoId}`;

    const videoPlayed = e => {
      const player = e.target;
      addVideo({ id: videoId, title: video.snippet.title, description: '' });
      console.log('start play:', player);
    };

    return (
      <div className="main-vid" onClick={videoPlayed}>
        <div onClick={videoPlayed} className="main-video-box">
          <YouTube
            videoId={videoId}
            width="300"
            height="300"
            onPlay={this.onPlay}
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

// import React from 'react';
// import Iframe from 'react-iframe';
// import './style.css';
// import { addVideo } from '../../api';

// const MainVideo = props => {
//   const video = props.video;

//   if (!video) {
//     return <div className="main-vid">Loading...</div>;
//   }

//   const videoId = video.id.videoId;
//   const url = `https://www.youtube.com/embed/${videoId}`;

//   const videoPlayed = e => {
//     const player = e.target;
//     addVideo({ id: videoId, title: video.snippet.title, description: '' });
//     console.log('start play:', player);
//   };

//   return (
//     <div className="main-vid" onClick={videoPlayed}>
//       <div onClick={videoPlayed} className="main-video-box">
//         <Iframe
//           url={url}
//           width="860px"
//           height="600px"
//           id={videoId}
//           className="myClassname"
//           display="initial"
//           position="relative"
//         />
//       </div>
//       <div className="details">
//         <div className="text-datails">{video.snippet.title}</div>
//         <div className="text-datails">{video.snippet.description}</div>
//       </div>
//     </div>
//   );
// };

// export default MainVideo;
