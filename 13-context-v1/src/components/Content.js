import React, { useContext } from 'react';
import { ThemeContext } from '../App';

//This is a functional component ******
//In this case we are using the useContext hook because is a functional component.

function Content() {
    const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'dark' ? '#555' : '#EEE',
        color: theme === 'dark' ? '#FFF' : '#000',
        padding: '20px',
        margin: '10px',
      }}
    >
      <h2>Content</h2>
      <p>This is the content area. The theme is {theme}.</p>
    </div>
  );
}

export default Content;