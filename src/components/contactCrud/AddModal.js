import React, { useState } from "react"; 
import { createContact } from "../../api/contactApi"; // Import fungsi API untuk membuat kontak baru
import { toast } from "react-toastify"; // Import toast untuk notifikasi

// Fungsi komponen untuk modal tambah kontak
export default function AddModal({ fetchContacts }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  }); // State untuk menyimpan data form kontak baru

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    }); // Mengupdate state dengan nilai input yang baru
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleAddContact(formData); // Memanggil fungsi handleAddContact jika submit berhasil
    } catch (error) {
      console.error("Error adding contact:", error); // Menangani kesalahan jika ada
    }
  };

  // Fungsi untuk menambah kontak baru
  const handleAddContact = async (formData) => {
    try {
      await createContact(formData); // Memanggil API untuk membuat kontak baru
      fetchContacts(); // Memanggil fungsi untuk mengambil daftar kontak setelah kontak baru ditambah
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
      }); // Mengatur ulang form input
      document.getElementById("add_modal").close(); // Menutup modal
      toast.success("Contact added successfully"); // Tampilkan notifikasi sukses
    } catch (error) {
      console.error("Error adding contact:", error); // Menangani kesalahan jika ada
      toast.error("Failed to add contact"); // Tampilkan notifikasi error
    }
  };

  // Tampilan modal dengan form tambah kontak
  return (
    <div>
      <dialog id="add_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <p className="text-lg font-semibold">Add New Contact</p>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label
                  htmlFor="name"
                  className="flex font-semibold text-l mt-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex font-semibold text-l mt-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="flex font-semibold text-l mt-3"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-end my-3">
                <button
                  type="submit"
                  className="btn btn-success justify-end text-white"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
