import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const videos = [
  'https://www.youtube.com/watch?v=BBpAmxU_NQo&t=2622s',
  'https://www.youtube.com/watch?v=mqprM5YUdpk',
  'https://www.youtube.com/watch?v=kqtD5dpn9C8&t=2776s',
  'https://www.youtube.com/watch?v=Y6aYx_KKM7A',
  'https://www.youtube.com/watch?v=ENrzD9HAZK4',
  'https://www.youtube.com/watch?v=BGTx91t8q50&t=2655s',
  'https://www.youtube.com/watch?v=KJgsSFOSQv0',
  'https://www.youtube.com/watch?v=McojvctVsUs',
  'https://www.youtube.com/watch?v=rHux0gMZ3Eg',
  'https://www.youtube.com/watch?v=VqgUkExPvLY'
];

const VideoGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video} className="w-full">
            <img
  src={`https://img.youtube.com/vi/${new URLSearchParams(new URL(video).search).get('v')}/0.jpg`}
  alt="Video thumbnail"
  className="w-full cursor-pointer"
  onClick={() => setSelectedVideo(video)}
/>


          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white rounded-lg p-4">
            <ReactPlayer url={selectedVideo} controls={true} />
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSelectedVideo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
