// CollegeContext.js
import React, { createContext, useState } from 'react';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  const [colleges, setColleges] = useState([
    // Example data structure
    {
      id: 1,
      name: 'College Name',
      image: 'https://example.com/image.jpg',
      merit: 90,
      subjects: ['Subject1', 'Subject2'],
      description: 'Detailed information about the college.',
    },
    // Add more colleges as needed
  ]);

  return (
    <CollegeContext.Provider value={{ colleges, setColleges }}>
      {children}
    </CollegeContext.Provider>
  );
};
