import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import { InputProps } from './TextInput'
import { FieldValues, UseFormSetValue, UseFormTrigger } from 'react-hook-form'

interface AutocompleteProps extends InputProps {
  items: string[]
  trigger: UseFormTrigger<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}
const Wrapper = styled.div`
  position: relative;
  & ul {
    position: absolute;
    top: 56px;
    list-style-type: none;
    padding: 0;
    width: 100%;
    li {
      cursor: pointer;
      border: thin solid #758a8a;
      border-bottom: none;
      height: 30px;
      display: flex;
      width: 75%;
      padding-left: 10px;
      padding-right: 10px;
      line-height: 1;
      align-items: center;
      background-color: white;
    }
    li:hover {
      background-color: #eeeeee;
    }
    li:last-child {
      border-bottom: thin solid #758a8a;
    }
  }
`
const Autocomplete: React.FC<AutocompleteProps> = ({ id, items, trigger, setValue, ...props }) => {
  const [isItemsOpen, setIsItemsOpen] = useState(false)

  function handleFocus() {
    setIsItemsOpen(true)
  }
  function handleItemClick(item: string) {
    setValue(id, item)
    trigger(id)
    setIsItemsOpen(false)
  }
  function handleInputBlur() {
    setIsItemsOpen(false)
  }

  return (
    <Wrapper onBlur={handleInputBlur}>
      <TextInput id={id} {...props} onFocus={handleFocus} autoComplete="off" />
      {isItemsOpen ? (
        <ul>
          {items.map((item, index) => (
            <li key={index} onMouseDown={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      ) : undefined}
    </Wrapper>
  )
}

export default Autocomplete
