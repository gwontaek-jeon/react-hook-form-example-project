import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  & label {
    display: block;
  }
`
export interface InputHeaderProps {
  id: string
  label: string
  description?: string
}
const InputHeader: React.FC<InputHeaderProps> = ({ id, label, description }) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      {description ? <p className="description">{description}</p> : undefined}
    </Wrapper>
  )
}

export default InputHeader
