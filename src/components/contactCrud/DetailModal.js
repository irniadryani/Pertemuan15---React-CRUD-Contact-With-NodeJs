import React, { useEffect, useState } from "react"; 
import { getContactById } from "../../api/contactApi"; // Import API untuk mendapatkan detail kontak

// Fungsi komponen untuk modal detail kontak
export default function DetailModal({ contactId }) {
  const [contact, setContact] = useState(null); // State untuk menyimpan data kontak

  // useEffect untuk memanggil fungsi fetchContact ketika contactId berubah
  useEffect(() => {
    fetchContact(); // Memanggil fungsi untuk mengambil data kontak berdasarkan ID
  }, [contactId]);

  // Fungsi untuk mengambil data kontak berdasarkan ID
  const fetchContact = async () => {
    try {
      const data = await getContactById(contactId); // Memanggil API untuk mendapatkan detail kontak
      setContact(data); // Mengupdate state dengan data kontak yang diterima
    } catch (error) {
      console.error(`Error fetching contact with id ${contactId}:`, error); // Menangani kesalahan jika ada
    }
  };

  // Jika data kontak belum diambil, kembalikan null
  if (!contact) {
    return null; // Tampilkan pesan loading atau sesuatu saat data kontak sedang diambil
  }

  // Tampilan modal dengan detail kontak
  return (
    <div>
      <dialog id="detail_modal" className="modal">
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("detail_modal").close()} 
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Detail Contact</h3>
          <p className="py-4"><strong>Name:</strong> {contact.name}</p>
          <p className="py-4"><strong>Email:</strong> {contact.email}</p>
          <p className="py-4"><strong>Phone Number:</strong> {contact.phoneNumber}</p>
        </div>
      </dialog>
    </div>
  );
}
