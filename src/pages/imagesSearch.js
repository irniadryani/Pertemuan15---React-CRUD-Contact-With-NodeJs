import React, { useState } from "react";
import { Container } from "@mui/material";
import SearchForm from "../components/searchImage/SearchForm";
import ImageListDisplay from "../components/searchImage/ImageListDisplay";
import { unsplashApi } from "../api/unsplashApi";

// Komponen  untuk pencarian gambar menggunakan API Unsplash.
const ImageSearch = () => {
  const [images, setImages] = useState([]); // State untuk menyimpan hasil gambar
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan input pencarian

  // Function handleSubmit untuk menangani submit form pencarian.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah pengiriman form secara default
    try {
      const results = await unsplashApi(searchTerm); // Memanggil API Unsplash dengan kata kunci pencarian
      setImages(results); // Memperbarui state images dengan hasil pencarian
    } catch (err) {
      console.error(err.message); // Menangani error jika terjadi
    }
  };

  //Function handleInputChange untuk menangani perubahan nilai input pencarian.
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Memperbarui state searchTerm sesuai dengan nilai input
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      {/* Menampilkan SearchForm untuk input pencarian */}
      <SearchForm
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {/* Menampilkan ImageListDisplay untuk menampilkan hasil pencarian gambar */}
      <ImageListDisplay images={images} />
    </Container>
  );
};

export default ImageSearch;
