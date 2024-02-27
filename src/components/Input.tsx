import React from 'react'
import styled from 'styled-components'
import { ErrorMessage } from '@hookform/error-message'
import { UseFormRegister, FieldValues, FieldErrors, RegisterOptions } from 'react-hook-form'
import InputHeader from './InputHeader'
import { InputHeaderProps } from './InputHeader'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputHeaderProps {
  id: string
  register: UseFormRegister<FieldValues>
  registerOptions: RegisterOptions
  errors: FieldErrors
}
const Wrapper = styled.div`
  & .error-message {
    color: red;
    font-size: 12px;
    margin-top: 8px;
  }
`
const StyledInput = styled.input<{ $errors: any }>`
  display: block;
  width: 75%;
  border-radius: 2px;
  border: thin solid ${({ $errors }) => ($errors ? 'red' : '#758a8a')};
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bolder;
`

const Input: React.FC<InputProps> = ({
  id,
  label,
  description,
  register,
  errors,
  registerOptions,
  ...props
}) => {
  return (
    <Wrapper>
      <InputHeader id={id} label={label} description={description} />
      <StyledInput $errors={errors?.[id]} id={id} {...register(id, registerOptions)} {...props} />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => {
          return <p className="error-message">{message}</p>
        }}
      />
    </Wrapper>
  )
}

export default Input
