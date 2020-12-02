import React from 'react';
import "./Button.scss";

interface IButtonProps{
  className: string,
  type?: "icon"
  clickHandler?: () => void,
  children?: any
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  return (
    <button className={`btn ${props.className} ${props.type}`} onClick={props.clickHandler}>{props.children}</button>
  );
}
 
export default Button;