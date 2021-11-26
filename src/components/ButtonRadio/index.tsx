import React from 'react';

import { Container } from './styles';

interface IButtonRadioProps {
  id: string;
  checked: any;
  onClick: () => void;
  className: string | undefined;
  children: React.ReactChild;
}

export const ButtonRadio = ({
  id,
  checked,
  onClick,
  className,
  children,
}: IButtonRadioProps) => {
  return (
    <>
      <input type="radio" id={id} checked={checked} onClick={onClick} hidden />
      <Container htmlFor={id} className={className}>
        {children}
      </Container>
    </>
  );
};
