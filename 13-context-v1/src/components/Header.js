import React, { Component } from 'react';
import { ThemeContext } from '../App';

// This is a class component ******
//In this case we are using this consumer <ThemeContext.Consumer>  becasue is a class component.

class Header extends Component {
    render() {
      return (
        <ThemeContext.Consumer> 
          {({ theme, toggleTheme }) => (
            <header
              style={{
                background: theme === 'dark' ? '#333' : '#CCC',
                color: theme === 'dark' ? '#FFF' : '#000',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <h1>Header</h1>
              <p>Current Theme: {theme}</p>
            
            </header>
          )}
        </ThemeContext.Consumer>
      );
    }
  }
  

export default Header;