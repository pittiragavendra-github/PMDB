import React from 'react';
const Navbar = ({totalcount }) => {
  return ( <div>
  
  
  <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar <span className={"badge badge-pill badge-secondary"}>{totalcount}</span></span>
  </nav></div> );
  }


 
export default Navbar;

 
