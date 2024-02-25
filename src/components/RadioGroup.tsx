import React from 'react'
import styled from 'styled-components'
import InputHeader from './InputHeader'
import { InputHeaderProps } from './InputHeader'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement>, InputHeaderProps {
  id: string
  register: UseFormRegister<FieldValues>
  options: Array<{
    id: string
    label: string
    value: any
    description?: string
  }>
}
const Input = styled.input`
  display: inline-block;
  margin-right: 10px;
  height: 16px;
  width: 16px;
`
const RadioItem = styled.div`
  display: flex;
  padding-bottom: 4px;
  & {
    & label {
      padding: 0;
    }
    & .description {
      padding-top: 4px;
    }
  }
`

const RadioGroup: React.FC<RadioGroupProps> = ({
  id,
  description,
  label,
  options,
  register,
  ...props
}) => {
  return (
    <div>
      <InputHeader id={id} label={label} description={description ? description : undefined} />
      <div>
        {options.map((option, index) => (
          <RadioItem key={option.id}>
            <Input
              type="radio"
              id={option.id}
              value={option.value}
              defaultChecked={index === 0}
              {...register(id)}
              {...props}
            />
            <label htmlFor={option.id}>
              <p>{option.label}</p>
              {option.description ? <p className="description">{option.description}</p> : undefined}
            </label>
          </RadioItem>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
