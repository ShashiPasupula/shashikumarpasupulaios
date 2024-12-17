import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const searchUsers = async (query: string, page: number = 1) => {
  try {
    const response = await api.get(`/search/users?q=${query} in:login&page=${page}&per_page=10`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Something went wrong";
  }
};
