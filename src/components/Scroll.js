import React from "react";

const Scroll = (props) => {
   return (
      <div style={{ overflow: 'scroll', border: '5px dotted white', borderRadius:'8px', height: '900px' }}>
         {props.children}
      </div>
   );
};

export default Scroll;