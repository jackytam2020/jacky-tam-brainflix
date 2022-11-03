import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentSection from './components/CommentSection/CommentSection';
import NextVideoList from './components/NextVideoList/NextVideoList';

import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer thumbnail={videos[0].image} />
      <section className="App__bottom-section">
        <div className="App__left-section">
          <VideoDetails
            videoTitle={videoDetails[0].title}
            channel={videoDetails[0].channel}
            date={new Date(videoDetails[0].timestamp)
              .toLocaleString('en-CA', {
                timeZone: 'UTC',
                day: '2-digit',
                month: 'numeric',
                year: 'numeric',
              })
              .replace(/,/g, ' /')}
            views={videoDetails[0].views}
            likes={videoDetails[0].likes}
            description={videoDetails[0].description}
          />

          <CommentSection
            numOfComments={videoDetails[0].comments.length}
            comments={videoDetails[0].comments}
          />
        </div>
        <div className="App__right-section">
          <NextVideoList videos={videos} />
        </div>
      </section>
    </div>
  );
}

export default App;
