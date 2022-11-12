import React from "react";
import { ButtonMain } from './style'

const Button = ({name, onClick}) => {
  return (
    <ButtonMain onClick={onClick}>{name}</ButtonMain>
  );
};
export { Button };