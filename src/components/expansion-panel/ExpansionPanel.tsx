import React, { useState, useContext, createContext } from 'react'
import ExpansionPanelTitle from './ExpansionPanelTitle'
import ExpansionPanelContent from './ExpansionPanelContent'
import styled from 'styled-components'

interface ExpansionPanelInterface {
  Title: React.FC<{ children: string }>
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

const ExpansionPanel: React.FC<{ children: React.ReactNode }> & ExpansionPanelInterface = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true)
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
