import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//components
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentSection from './components/CommentSection/CommentSection';
import NextVideoList from './components/NextVideoList/NextVideoList';

import './App.scss';

function App() {
  const apiKey = '1ed048a3-1c44-4c1d-93f6-633b34652602';
  const params = useParams();
  const [videoID, setVideoID] = useState(
    params.videoID ? params.videoID : '84e96018-4022-434e-80bf-000ce4cd12b8'
  );

  const [sideBarVideos, setSideBarVideos] = useState([]); //grab every single video except for the default/initial video
  const [selectedVideo, setSelectedVideo] = useState({});

  //grab videos for side bar except for the currently selected
  const getAllVideos = async (videoID) => {
    const response = await axios.get(
      `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
    );
    setSideBarVideos(response.data.filter((video) => video.id !== videoID));
  };

  const getSelectedVideo = async (videoID) => {
    const response = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${videoID}?api_key=${apiKey}`
    );
    setSelectedVideo(response.data);
  };

  const handleSideBarClick = (video) => {
    setVideoID(video);
    getAllVideos(video);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getAllVideos(videoID);
    getSelectedVideo(videoID);
  }, []);

  useEffect(() => {
    getSelectedVideo(videoID);
  }, [videoID]);

  useEffect(() => {
    if (params.videoID) {
      getSelectedVideo(params.videoID);
      getAllVideos(params.videoID);
    } else {
      //if url goes back to home, show default video
      getSelectedVideo('84e96018-4022-434e-80bf-000ce4cd12b8');
      getAllVideos('84e96018-4022-434e-80bf-000ce4cd12b8');
    }
  }, [params.videoID]);

  return (
    <div className="app-container">
      <Header />
      {selectedVideo && <VideoPlayer selectedVideo={selectedVideo} />}
      <section className="app-container__bottom-section">
        <div className="app-container__left-section">
          {selectedVideo && <VideoDetails selectedVideo={selectedVideo} />}
        </div>
        <div className="app-container__right-section">
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
