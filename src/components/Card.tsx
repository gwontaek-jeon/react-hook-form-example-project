import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow:
    0 1px 1px 0 rgba(0, 28, 36, 0.3),
    1px 1px 1px 0 rgba(0, 28, 36, 0.15),
    -1px 1px 1px 0 rgba(0, 28, 36, 0.15);
`
const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Card
