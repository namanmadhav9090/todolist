import React, { useState } from "react";
import Styles from "./style.module.css";

const Input = ({getValue, val}) => {
    const handleChangeInput = (value) => {
        getValue(value);
    }

    return (
           <input
            className={Styles.input} 
            value={val} 
            onChange={(e) => handleChangeInput(e.target.value) }
            placeholder="title"
             />
    )
}

export default Input;