import React from "react"; 
import { updateContact } from "../../api/contactApi"; // Import fungsi API untuk memperbarui kontak
import { toast } from "react-toastify"; // Import toast dari react-toastify untuk menampilkan notifikasi

// Fungsi komponen untuk modal edit kontak
export default function EditModal({ formData, setFormData, setContacts }) {

  // Fungsi untuk menangani perubahan input pada form
  const handleEditInputChange = (event) => {
    const { name, value } = event.target; // Mendapatkan nama dan nilai dari input
    setFormData({
      ...formData,
      [name]: value, // Mengupdate nilai form data dengan nilai baru
    });
  };

  // Fungsi untuk memperbarui kontak
  const handleUpdateContact = async () => {
    try {
      await updateContact(formData.id, formData); // Memanggil API untuk memperbarui kontak
      setContacts((prevContacts) => {
        const updatedContacts = prevContacts.map((contact) =>
          contact.id === formData.id ? formData : contact // Mengupdate kontak dalam daftar
        );
        return updatedContacts; // Mengembalikan daftar kontak yang telah diperbarui
      });
      toast.success("Contact updated successfully"); // Tampilkan notifikasi sukses
    } catch (error) {
      console.error("Error updating contact:", error); // Menangani kesalahan jika ada
      toast.error("Failed to update contact"); // Tampilkan notifikasi error
    }
  };

  // Fungsi untuk menangani pengiriman form edit
  const handleSubmitEditForm = async (event) => {
    event.preventDefault(); // Mencegah pengiriman form secara default
    await handleUpdateContact(); // Memanggil fungsi untuk memperbarui kontak
    document.getElementById("edit_modal").close(); // Menutup modal setelah memperbarui kontak
  };

  return (
    <div>
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmitEditForm}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("edit_modal").close()} 
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Edit Contact</h3>
            <div>
              <label htmlFor="name" className="flex font-semibold text-l mt-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleEditInputChange} // Menangani perubahan input nama
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex font-semibold text-l mt-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleEditInputChange} // Menangani perubahan input email
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
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
                value={formData.phoneNumber}
                onChange={handleEditInputChange} // Menangani perubahan input nomor telepon
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex justify-end my-3">
              <button
                type="submit"
                className="btn btn-success justify-end text-white"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
