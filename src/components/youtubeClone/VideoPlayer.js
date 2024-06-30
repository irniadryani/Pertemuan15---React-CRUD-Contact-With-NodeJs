import React from "react";
import waitGif from "../../assets/waitGif.gif";


 //Komponen untuk menampilkan pemutar video YouTube.
 //Jika video dipilih, akan menampilkan pemutar YouTube dengan judul dan deskripsi video.
 //Jika tidak ada video dipilih, akan menampilkan animasi menunggu.
 
const VideoPlayer = ({ selectedVideo }) => {   // Menerima props 
  return (
    <div className="w-2/3 p-5">
      {selectedVideo ? ( // Jika selectedVideo tidak null atau undefined
        <div className="bg-base-100 mb-4">
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} // URL embed YouTube
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // Memungkinkan video full screen
          ></iframe>
          <div className="bg-base-100 p-4">
            <h2 className="text-2xl font-bold mb-2">
              {selectedVideo.snippet.title} {/* Judul video */}
            </h2>
            <p className="text-sm">{selectedVideo.snippet.description}</p> {/* Deskripsi video */}
          </div>
        </div>
      ) : (
        <div className="text-right mr-20 text-xl font-bold">
          <div className=" flex justify-end">
            <img src={waitGif} className="w-56" alt="Loading GIF" /> {/* Animasi loading */}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
