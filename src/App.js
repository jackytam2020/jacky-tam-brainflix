import { useState } from 'react';

//components
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentSection from './components/CommentSection/CommentSection';
import NextVideoList from './components/NextVideoList/NextVideoList';

//import functions to grab video data
import { getSelectedVideo, getSideBarVideos } from './utils/utils';

import './App.scss';

function App() {
  const [videoID, setVideoID] = useState(
    '84e96018-4022-434e-80bf-000ce4cd12b8'
  );

  const [sideBarVideos, setSideBarVideos] = useState(getSideBarVideos(videoID)); //grab every single video except for the default/initial video
  const [selectedVideo, setSelectedVideo] = useState(getSelectedVideo(videoID));

  const handleSideBarClick = (video) => {
    setVideoID(video);
    setSelectedVideo(getSelectedVideo(video));
    setSideBarVideos(getSideBarVideos(video));
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header />
      <VideoPlayer thumbnail={selectedVideo.image} />
      <section className="App__bottom-section">
        <div className="App__left-section">
          <VideoDetails
            videoTitle={selectedVideo.title}
            channel={selectedVideo.channel}
            date={new Date(selectedVideo.timestamp)
              .toLocaleString('en-CA', {
                timeZone: 'UTC',
                day: '2-digit',
                month: 'numeric',
                year: 'numeric',
              })
              .replace(/-/g, '/')}
            views={selectedVideo.views}
            likes={selectedVideo.likes}
            description={selectedVideo.description}
          />

          <CommentSection
            numOfComments={selectedVideo.comments.length}
            comments={selectedVideo.comments}
          />
        </div>
        <div className="App__right-section">
          <NextVideoList
            videos={sideBarVideos}
            handleSideBarClick={handleSideBarClick}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
