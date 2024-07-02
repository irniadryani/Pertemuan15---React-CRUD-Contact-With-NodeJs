import React, { useEffect, useState } from "react";
import {
    getContacts,
  } from "../../api/contactApi";

export default function listContact() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetchContacts();
      }, []);
    
      const fetchContacts = async () => {
        try {
          const data = await getContacts();
          setContacts(data);
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      };
  return (
    <div> <div className="">
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
          {contacts.map((contact, index) => (
            <tr key={contact.id} className="text-l font-medium">
              <th>{index + 1}</th>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phoneNumber}</td>
              <td>
                <div className="flex justify-center">
                  <button
                    className="btn btn-info mx-3 text-white"
                    onClick={() => openDetailModal(contact.id)}
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
  </div></div>
  )
}
