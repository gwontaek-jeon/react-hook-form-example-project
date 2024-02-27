import React from 'react'
import styled from 'styled-components'
import { useExpansionContext } from './ExpansionPanel'
const Wrapper = styled.div<{ $dense: Boolean | undefined }>`
  color: ${({ $dense }) => ($dense ? '#545b64' : 'black')};
  background-color: ${({ $dense }) => ($dense ? 'rgba(0,0,0,0)' : '#fafafa')};
  padding: ${({ $dense }) => ($dense ? '10px 10px' : '20px 24px')};
  font-size: ${({ $dense }) => ($dense ? '14px' : '20px')};
  cursor: pointer;
  font-weight: bolder;

  .arrow-down {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid ${({ $dense }) => ($dense ? '#545b64' : 'black')};
    margin-right: 12px;
  }

  .arrow-down.active {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`

export interface ExpansionPanelTitleProps {
  dense?: Boolean
  children: React.ReactNode
}
const ExpansionPanelTitle: React.FC<ExpansionPanelTitleProps> = ({ dense, children }) => {
  const { isOpen, toggleContent } = useExpansionContext()
  return (
    <Wrapper $dense={dense ? dense : undefined} onClick={() => toggleContent()}>
      <div className={`arrow-down ${isOpen ? 'active' : undefined}`}></div>
      {children}
    </Wrapper>
  )
}

export default ExpansionPanelTitle
