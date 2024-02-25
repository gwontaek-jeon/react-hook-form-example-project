import styled from 'styled-components'
const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: auto;
  background: #232f3e;
  color: white;
  width: 100vw;
  padding: 8px;
`
function NavHeader() {
  return <Nav>AWS</Nav>
}
export default NavHeader
