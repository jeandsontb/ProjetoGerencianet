import React from 'react';

const FontStyles = ({ children }) => {
    return (
      <React.Fragment>
        <style jsx global>
          {`
           @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
           @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&display=swap');
           @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&family=Roboto:wght@100;400;700&display=swap');
          `}
        </style>
        
        {children}
      </React.Fragment>
    );
}

export default FontStyles;