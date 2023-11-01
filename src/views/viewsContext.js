// viewsContext.js
import React, { createContext, useState } from 'react';

export const ViewsContext = createContext();

export const ViewsProvider = ({ children }) => {
  const [views, setViews] = useState({
    Python: 0,
    C: 0,
    Java: 0,
  });

  return (
    <ViewsContext.Provider value={{ views, setViews }}>
      {children}
    </ViewsContext.Provider>
  );
};
