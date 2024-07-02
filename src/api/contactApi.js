import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export const getContacts = async () => {
  try {
    const response = await axios.get(`${API_URL}/contact`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const getContactById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/contact/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  };


export const createContact = async (contact) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, contact);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

export const updateContact = async (id, contact) => {
  try {
    const response = await axios.post(`${API_URL}/contact/update/${id}`, contact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.post(`${API_URL}/contact/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};
