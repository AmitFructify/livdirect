import React from 'react';

interface IIconProps {
  type: string,
  size?: string
}
 
const Icon: React.FC<IIconProps> = (props: IIconProps) => {
  return (
    <i className={`icon ${props.size ? props.size : ""} ${props.type}`}></i>
  );
}
 
export default Icon;