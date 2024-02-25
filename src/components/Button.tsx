import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
}

const StyledButton = styled.button<{ $color: string | undefined }>`
  height: 30px;
  padding: 0 20px;
  color: black;
  background-color: ${({ $color }) => ($color ? $color : 'rgba(0, 0, 0, 0)')};
  border-width: ${({ $color }) => ($color ? 0 : 'thin')};
  border-radius: 2px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`
const Button: React.FC<ButtonProps> = ({ color, children, ...props }) => {
  return (
    <StyledButton $color={color ? color : undefined} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
