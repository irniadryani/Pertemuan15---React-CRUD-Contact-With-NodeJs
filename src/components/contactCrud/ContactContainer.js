import React, { useEffect, useState } from "react"; 
import { getContacts, deleteContact } from "../../api/contactApi"; // Import fungsi API untuk mendapatkan dan menghapus kontak
import DetailModal from "./DetailModal"; // Import komponen DetailModal
import EditModal from "./EditModal"; // Import komponen EditModal
import AddModal from "./AddModal"; // Import komponen AddModal
import { toast } from "react-toastify"; // Import toast dari react-toastify untuk menampilkan notifikasi

// Fungsi komponen utama untuk mengelola kontak
export default function ContactContainer() {
  // State untuk menyimpan daftar kontak
  const [contacts, setContacts] = useState([]);
  // State untuk menyimpan ID kontak yang dipilih
  const [selectedContactId, setSelectedContactId] = useState(null);
  // State untuk menyimpan data formulir kontak
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    phoneNumber: "",
  });

  // useEffect digunakan untuk memanggil fetchContacts saat komponen dimuat
  useEffect(() => {
    fetchContacts();
  }, []);

  // Fungsi untuk mengambil daftar kontak dari API
  const fetchContacts = async () => {
    try {
      const data = await getContacts(); // Memanggil API untuk mendapatkan kontak
      setContacts(data); // Menyimpan data kontak di state
    } catch (error) {
      console.error("Error fetching contacts:", error); // Menangani kesalahan jika ada
    }
  };

  // Fungsi untuk menghapus kontak berdasarkan ID
  const handleDeleteContact = async (contactId) => {
    try {
      await deleteContact(contactId); // Memanggil API untuk menghapus kontak
      fetchContacts(); // Memuat ulang daftar kontak setelah dihapus
      toast.success("Contact deleted successfully"); // Tampilkan notifikasi sukses
    } catch (error) {
      console.error("Error deleting contact:", error); // Menangani kesalahan jika ada
      toast.error("Failed to delete contact"); // Tampilkan notifikasi error
    }
  };

  // Fungsi untuk membuka modal edit dan mengisi form dengan data kontak yang dipilih
  const openEditModal = (contactId) => {
    const contactToEdit = contacts.find((contact) => contact.id === contactId); // Menemukan ID kontak yang akan diedit
    setFormData(contactToEdit); // Mengisi form data dengan kontak yang dipilih
    document.getElementById("edit_modal").showModal(); // Menampilkan modal edit
  };

  return (
    <div>
      <div className="mt-10">
        <p className="text-xl text-center font-bold">Contact CRUD</p>
      </div>

      <div className="flex justify-end m-10">
        <button
          className="btn btn-success justify-end text-white"
          onClick={() => document.getElementById("add_modal").showModal()}
        >
          Add Contact
        </button>
      </div>

      <div className="">
        <div className="overflow-x-auto m-10">
          <table className="table table-zebra">
            <thead>
              <tr className="font-semibold text-lg text-center text-black">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Menampilkan daftar kontak secara dinamis */}
              {contacts.map((contact, index) => (
                <tr key={contact.id} className="text-l font-medium">
                  <th>{index + 1}</th>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="btn btn-info mx-3 text-white"
                        onClick={() => {
                          setSelectedContactId(contact?.id);
                          document?.getElementById("detail_modal")?.showModal();
                        }}
                      >
                        Detail
                      </button>
                      <button
                        className="btn btn-warning text-white"
                        onClick={() => openEditModal(contact.id)}
                      >
                        Update
                      </button>

                      <button
                        className="btn btn-error mx-3 text-white"
                        onClick={() => handleDeleteContact(contact.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Menampilkan modal untuk menambahkan kontak */}
      <AddModal fetchContacts={fetchContacts} />
      {/* Menampilkan modal untuk melihat detail kontak */}
      <DetailModal contactId={selectedContactId} />
      {/* Menampilkan modal untuk mengedit kontak */}
      <EditModal
        formData={formData}
        setFormData={setFormData}
        fetchContacts={fetchContacts}
        setContacts={setContacts}
      />
    </div>
  );
}
