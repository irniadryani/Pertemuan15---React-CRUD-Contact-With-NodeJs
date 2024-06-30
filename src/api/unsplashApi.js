import axios from "axios";

// Membuat  konfigurasi baseURL dan header Authorization untuk API Unsplash
const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID I_PztWOZGZqGgPQVixNXRGOGlsB2a1skwU12LX1irrA", // Token Client-ID untuk otorisasi pada API Unsplash
  },
});

export const unsplashApi = async (query) => {
  try {
    // Mengirimkan permintaan GET ke API Unsplash dengan endpoint '/search/photos' dan parameter query
    const response = await unsplash.get("/search/photos", {
      params: { query }, // Menyertakan query sebagai parameter pencarian
    });
    return response.data.results; // Mengembalikan data hasil pencarian dari response API
  } catch (err) {
    console.error(err.message); // Menampilkan pesan error jika terjadi masalah pada permintaan API
    throw err; // Melemparkan error untuk ditangani oleh pemanggil fungsi
  }
};
