import React from 'react'
import styled from 'styled-components'
import { useExpansionContext } from './ExpansionPanel'

const Wrapper = styled.div`
  border-top: thin solid #eaeded;
  display: none;
  flex-direction: column;
  row-gap: 20px;
  padding: 24px;

  &.open {
    display: flex;
  }
`

const ExpansionPanelContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen } = useExpansionContext()
  return <Wrapper className={isOpen ? 'open' : undefined}>{children}</Wrapper>
}

export default ExpansionPanelContent
