import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const updateUser = (newData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newData,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data); // full user info
      } catch (err) {
        console.error("Error fetching user info:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return null; 

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser: () => setUser(null) }}>
      {children}
    </UserContext.Provider>
  );
  
};

export default UserProvider;

