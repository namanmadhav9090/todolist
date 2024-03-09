import React from 'react';
import Styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className={Styles.Navbar}>
       <div className={Styles.logo_container}>
       <p className={Styles.logo}>GYIZER</p>
       <p className={Styles.logo_text}>TODO APP</p>
       </div>
    </div>
  )
}

export default Navbar