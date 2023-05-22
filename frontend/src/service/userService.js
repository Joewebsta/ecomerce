import axios from "axios";

// const API_BASE_URL = '/api/users';
const API_BASE_URL = 'http://localhost:4000/api/users';

const getUsers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data
  } catch (error) {
    throw new Error('Failed fetching users');
  }
}

const createUser = async (newUser) => {
  try {
    const response = await axios.post(API_BASE_URL, newUser);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create new user.');
  }
}

const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    throw new Error('Failed to delete user.');
  }
}


export default { getUsers, deleteUser, createUser }