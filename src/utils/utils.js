import videos from '../data/videos.json';
import videoDetails from '../data/video-details.json';

//grab videos for side bar except for the currently selected

export const getSideBarVideos = (ID) => {
  return videos.filter((video) => video.id !== ID);
};

export const getSelectedVideo = (ID) => {
  return videoDetails.find((video) => video.id === ID);
};
