import { useState, useEffect } from 'react';
import axios from 'axios';

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
  const apiKey = '1ed048a3-1c44-4c1d-93f6-633b34652602';

  const [videoID, setVideoID] = useState(
    '84e96018-4022-434e-80bf-000ce4cd12b8'
  );

  const [sideBarVideos, setSideBarVideos] = useState([]); //grab every single video except for the default/initial video
  const [selectedVideo, setSelectedVideo] = useState({
    id: '84e96018-4022-434e-80bf-000ce4cd12b8',
    title: 'BMX Rampage: 2021 Highlights',
    channel: 'Red Cow',
    image: 'https://i.imgur.com/l2Xfgpl.jpg',
    description:
      'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    views: '1,001,023',
    likes: '110,985',
    duration: '4:01',
    video: 'https://project-2-api.herokuapp.com/stream',
    timestamp: 1626032763000,
    comments: [
      {
        id: '35bba08b-1b51-4153-ba7e-6da76b5ec1b9',
        name: 'Micheal Lyons',
        comment:
          'They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.',
        likes: 0,
        timestamp: 1628522461000,
      },
      {
        id: '091de676-61af-4ee6-90de-3a7a53af7521',
        name: 'Gary Wong',
        comment:
          'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
        likes: 0,
        timestamp: 1626359541000,
      },
      {
        id: '66b7d3c7-4023-47f1-a02c-520c9ca187a6',
        name: 'Theodore Duncan',
        comment:
          'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!',
        likes: 0,
        timestamp: 1626011132000,
      },
    ],
  });

  //grab videos for side bar except for the currently selected
  const getAllVideos = async (videoID) => {
    const response = await axios.get(
      `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
    );
    setSideBarVideos(response.data.filter((video) => video.id !== videoID));
  };

  const getDefaultSelectedVideo = async (videoID) => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoID}?api_key=${apiKey}`
      );
      setSelectedVideo(response.data);
    } catch (error) {
      console.log(error);
    }
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
    // setSelectedVideo(getSelectedVideo(video));
    // setSideBarVideos(getSideBarVideos(video));
  };

  useEffect(() => {
    getAllVideos(videoID);
  }, []);

  return (
    <div>
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

          {/* <CommentSection
            numOfComments={selectedVideo.comments.length}
            comments={selectedVideo.comments}
          /> */}
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
