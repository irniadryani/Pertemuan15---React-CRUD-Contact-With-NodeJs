import axios from "axios";

// URL API  dan key API untuk akses Google YouTube Data API v3
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAjsiLWX_QgWR7W_jf0PmBOHHGjT1UldKs";

export const youtubeApi = async (searchQuery) => {
  try {
    // Mengirimkan permintaan GET ke Google YouTube API dengan endpoint '/search'
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet", // Bagian dari video yang akan diambil informasinya
        maxResults: 5, // Jumlah maksimum hasil pencarian yang diinginkan
        q: searchQuery, // Kata kunci pencarian
        key: API_KEY, // Kunci API untuk otorisasi permintaan
      },
    });
    return response.data.items; // Mengembalikan data hasil pencarian video dari response API
  } catch (error) {
    console.error("Error fetching search results:", error); // Menampilkan pesan error jika terjadi masalah pada permintaan API
    throw error; // Melemparkan error untuk ditangani oleh pemanggil fungsi
  }
};
