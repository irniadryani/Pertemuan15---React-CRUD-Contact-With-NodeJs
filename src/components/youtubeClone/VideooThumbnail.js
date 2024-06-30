import React from "react";

//Komponen untuk menampilkan thumbnail video beserta judul dan deskripsi.
//Ketika thumbnail diklik, akan memanggil handleThumbnailClick dengan parameter video yang bersangkutan.

const VideoThumbnail = ({ video, handleThumbnailClick }) => {
  //menerima props
  return (
    <div
      className="card lg:card-side bg-base-100 my-5 cursor-pointer"
      key={video.id.videoId} // Key untuk memastikan setiap item unik dalam daftar
      onClick={() => handleThumbnailClick(video)} // Memanggil handleThumbnailClick saat thumbnail diklik
    >
      <figure>
        <img
          src={video.snippet.thumbnails.medium.url} // Mengambil URL thumbnail medium
          alt={video.snippet.title} // Alt sesuai dengan judul video untuk aksesibilitas
          className="w-56 rounded-xl"
        />
      </figure>
      <div className="mx-5 max-w-44">
        <h2 className="text-left font-bold text-xs">{video.snippet.title}</h2>
        <p className="text-left text-xs">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoThumbnail;
