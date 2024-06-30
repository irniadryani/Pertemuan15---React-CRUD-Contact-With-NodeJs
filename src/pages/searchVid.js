import React, { useState, useEffect } from "react";
import SearchForm from "../components/youtubeClone/SearchForm";
import VideoPlayer from "../components/youtubeClone/VideoPlayer";
import VideoThumbnail from "../components/youtubeClone/VideoThumbnail";
import { youtubeApi } from "../api/youtubeApi";


 // Komponen SearchVid untuk pencarian dan pemutaran video dari YouTube.
 
export default function SearchVid() {
  const [search, setSearch] = useState(""); // State untuk menyimpan kata kunci pencarian
  const [searchResults, setSearchResults] = useState([]); // State untuk menyimpan hasil pencarian video
  const [selectedVideo, setSelectedVideo] = useState(null); // State untuk menyimpan video yang dipilih
  const [isSearching, setIsSearching] = useState(false); // State untuk status pencarian

  //Function handleChange untuk menangani perubahan nilai input pencarian.
  const handleChange = (event) => {
    setSearch(event.target.value); // Memperbarui state search sesuai dengan nilai input
  };

   //Function untuk melakukan pencarian video saat isSearching berubah.
  useEffect(() => {
    if (isSearching) {
      const fetchData = async () => {
        try {
          const videos = await youtubeApi(search); // Memanggil API YouTube dengan kata kunci pencarian
          setSearchResults(videos); // Memperbarui state searchResults dengan hasil pencarian
          setSelectedVideo(videos[0]); // Mengatur video pertama sebagai video yang dipilih
        } catch (error) {
          console.error("Error fetching search results:", error); // Menangani error jika terjadi saat fetching data
        } finally {
          setIsSearching(false); // Mengubah status isSearching menjadi false setelah selesai pencarian
        }
      };

      fetchData(); // Memanggil fungsi fetchData untuk melakukan pencarian
    }
  }, [isSearching, search]); // Bergantung pada perubahan isSearching dan search

   //Function handleSubmit untuk menangani submit form pencarian.
  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah pengiriman form secara default
    setIsSearching(true); // Mengatur isSearching menjadi true untuk memulai pencarian
  };

  
   //Function handleThumbnailClick untuk menangani klik pada thumbnail video.
  const handleThumbnailClick = (video) => {
    setSelectedVideo(video); // Memperbarui state selectedVideo dengan video yang diklik
  };

  return (
    <div>
      {/* Menampilkan SearchForm untuk input pencarian */}
      <SearchForm
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="flex">
        {/* Menampilkan VideoPlayer untuk pemutaran video yang dipilih */}
        <VideoPlayer selectedVideo={selectedVideo} />
        <div className="w-1/3">
          {/* Menampilkan daftar VideoThumbnail untuk hasil pencarian video */}
          {searchResults.map((item) => (
            <VideoThumbnail
              key={item.id.videoId}
              video={item}
              handleThumbnailClick={handleThumbnailClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
