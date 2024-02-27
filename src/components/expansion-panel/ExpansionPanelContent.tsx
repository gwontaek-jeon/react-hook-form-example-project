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
export interface ExpansionPanelContentProps {
  children: React.ReactNode
}
const ExpansionPanelContent: React.FC<ExpansionPanelContentProps> = ({ children }) => {
  const { isOpen } = useExpansionContext()
  return <Wrapper className={isOpen ? 'open' : undefined}>{children}</Wrapper>
}

export default ExpansionPanelContent
