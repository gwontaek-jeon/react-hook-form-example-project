import React, { useState, useContext, createContext } from 'react'
import ExpansionPanelTitle from './ExpansionPanelTitle'
import { ExpansionPanelTitleProps } from './ExpansionPanelTitle'
import ExpansionPanelContent from './ExpansionPanelContent'
import styled from 'styled-components'

interface ExpansionPanelInterface {
  Title: React.FC<ExpansionPanelTitleProps>
  Content: React.FC<{ children: React.ReactNode }>
}
export type ExpansionPanelState = {
  isOpen: Boolean
  toggleContent: Function
}

const ExpansionPanelContext = createContext<ExpansionPanelState | null>(null)
const Wrapper = styled.div`
  background-color: white;
`

export function useExpansionContext() {
  const ctx = useContext(ExpansionPanelContext)

  if (!ctx) {
    throw new Error('ExpansionPanel-related components must be wrapped by <ExpansionPanel>.')
  }

  return ctx
}

export interface ExpansionPanelProps {
  open?: Boolean
  children: React.ReactNode
}
const ExpansionPanel: React.FC<ExpansionPanelProps> & ExpansionPanelInterface = ({
  open,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open ? true : false)
  function toggleContent() {
    setIsOpen((prevBool: Boolean) => {
      return !prevBool
    })
  }

  const contextValue: ExpansionPanelState = {
    isOpen,
    toggleContent,
  }

  return (
    <ExpansionPanelContext.Provider value={contextValue}>
      <Wrapper>{children}</Wrapper>
    </ExpansionPanelContext.Provider>
  )
}

ExpansionPanel.Title = ExpansionPanelTitle
ExpansionPanel.Content = ExpansionPanelContent

export default ExpansionPanel
