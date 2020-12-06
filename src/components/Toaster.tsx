import React from 'react';
import "./Toaster.scss";


import { useDispatch } from 'react-redux';
import {
  setToaster
} from '../store/appReducer';

import Icon from "./Icon";

import { ReactComponent as Tick } from '../icons/tick.svg';

interface IToasterProps{
  isOpen: boolean;
  message: string;
  type: "error" | "info" | "warn" | "";
}

const Button: React.FC<IToasterProps> = (props: IToasterProps) => {
  let dispatch = useDispatch();
  const closeToaster = () => {
    dispatch(setToaster({message: "", type: "", isOpen: false}));
  };

  return (
    <div className={`toaster ${props.isOpen?"open":""} ${props.type}`} onClick={closeToaster}>
      {props.type === "info" && <Tick width="16px" height="16px"/>}
      {props.message}
    </div>
  );
}
 
export default Button;