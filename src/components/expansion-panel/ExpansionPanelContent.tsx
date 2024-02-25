import React from 'react'
import styled from 'styled-components'
import { useExpansionContext } from './ExpansionPanel'

const Wrapper = styled.div`
  padding: 24px;
  &.open {
    display: block;
  }
  &.close {
    display: none;
  }
`

const ExpansionPanelContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen } = useExpansionContext()
  return <Wrapper className={isOpen ? 'open' : 'close'}>{children}</Wrapper>
}

export default ExpansionPanelContent
