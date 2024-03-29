import React, { Component } from 'react';
import SearcPanel from './components/SearchPanel';
import VideoList from './components/VideoList';
import MainVideo from './components/MainVideo';
import WacthHistory from './components/WatchHistory';
import YTSearch from 'youtube-api-search';

const _API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s'; //AIzaSyCAJiqovaCAKuMXBJy0xOTAdqBXD7f3jn4

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('ciclum kyiv');
  }

  videoSearch(searchTerm) {
    YTSearch({ key: _API_KEY, term: searchTerm, type: 'video' }, data => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }
  render() {
    return (
      <div className="main-block">
        <header>
          <h1>Youtube Search App</h1>
        </header>
        <section>
          <SearcPanel
            onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
          />
          <VideoList
            onVideoSelect={userSelected =>
              this.setState({ selectedVideo: userSelected })
            }
            videos={this.state.videos}
          />
        </section>
        <section className="inside-bottom">
          <WacthHistory />
          <MainVideo video={this.state.selectedVideo} />
        </section>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import SearcPanel from './components/SearchPanel';
// import VideoList from './components/VideoList';
// import MainVideo from './components/MainVideo';
// import WacthHistory from './components/WatchHistory';
// import YTSearch from 'youtube-api-search';

// const _API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s'; //AIzaSyCAJiqovaCAKuMXBJy0xOTAdqBXD7f3jn4

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       videos: [],
//       selectedVideo: null,
//     };
//     this.videoSearch('ciclum kyiv');
//   }

//   videoSearch(searchTerm) {
//     YTSearch({ key: _API_KEY, term: searchTerm }, data => {
//       this.setState({
//         videos: data,
//         selectedVideo: data[0],
//       });
//     });
//   }
//   render() {
//     return (
//       <div>
//         <header>
//           <h1>Youtube Search App</h1>
//         </header>
//         <SearcPanel
//           onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
//         />
//         <section className="main-block">
//           <WacthHistory video={this.state.selectedVideo} />
//           <MainVideo video={this.state.selectedVideo} />
//           <VideoList
//             onVideoSelect={userSelected =>
//               this.setState({ selectedVideo: userSelected })
//             }
//             videos={this.state.videos}
//           />
//         </section>
//       </div>
//     );
//   }
// }

// export default App;
