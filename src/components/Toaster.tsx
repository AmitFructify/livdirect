import React from 'react';
import "./Toaster.scss";


import { useDispatch } from 'react-redux';
import {
  setToaster
} from '../store/appReducer';

import Icon from "./Icon";

interface IToasterProps{
  isOpen: boolean;
  message: string;
  type: "error" | "infor" | "warn" | "";
}

const Button: React.FC<IToasterProps> = (props: IToasterProps) => {
  let dispatch = useDispatch();
  const closeToaster = () => {
    dispatch(setToaster({message: "", type: "", isOpen: false}));
  };

  return (
    <div className={`toaster ${props.isOpen?"open":""} ${props.type}`} onClick={closeToaster}><Icon type={props.type}/>{props.message}</div>
  );
}
 
export default Button;