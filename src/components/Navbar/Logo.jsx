import styled from "styled-components"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoText = styled.h2`
  margin: 0;
  margin-left: 0.25em;
  font-weight: 500;
  text-transform: uppercase;
  text-shadow: 0 0 0.125em #000000, 0 0 1.25em #142b4d;
`

function Logo() {
  return (
    <LogoWrapper>
      <LogoText>Uptown Landing</LogoText>
    </LogoWrapper>
  )
}

export default Logo