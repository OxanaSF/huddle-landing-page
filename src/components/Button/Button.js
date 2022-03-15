import { useState } from "react";
import "./Button.css";


const Button = () => {
  const [] = useState('');

  return (
    <button className="btn" onTouchMove>
      Register
    </button>
  )
};

export default Button;
