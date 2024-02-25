import React from 'react'
import styled from 'styled-components'
import { useExpansionContext } from './ExpansionPanel'
const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 20px 24px;
  border-bottom: thin solid #eaeded;
  cursor: pointer;

  .arrow-down {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid black;
    margin-right: 12px;
  }

  .arrow-down.active {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`

const ExpansionPanelTitle: React.FC<{ children: string }> = ({ children }) => {
  const { isOpen, toggleContent } = useExpansionContext()
  return (
    <Wrapper onClick={() => toggleContent()}>
      <h3>
        <div className={`arrow-down ${isOpen ? 'active' : undefined}`}></div>
        {children}
      </h3>
    </Wrapper>
  )
}

export default ExpansionPanelTitle
