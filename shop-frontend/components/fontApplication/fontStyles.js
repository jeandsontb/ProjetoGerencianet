import React from 'react';

const FontStyles = ({ children }) => {
    return (
      <React.Fragment>
        <style jsx global>
          {`
           @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
           @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
           @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
           @import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
          `}
        </style>
        
        {children}
      </React.Fragment>
    );
}

export default FontStyles;