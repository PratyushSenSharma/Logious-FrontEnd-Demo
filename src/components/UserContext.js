// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [chatId, setchatId] = useState(null);

  return (
    <UserContext.Provider value={{ userId, setUserId,chatId,setchatId }}>
      {children}
    </UserContext.Provider>
  );
};