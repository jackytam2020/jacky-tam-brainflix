import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

function App() {
  console.log(videoDetails[0]);
  return (
    <div className="App">
      <Header />
      <VideoPlayer thumbnail={videos[0].image} />
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
    </div>
  );
}

export default App;
