import styled from 'styled-components'

const ButtonsContainer = styled.div`
  display: flex;
  margin-left: 0.625em;
`

const RegisterButton = styled.button`
  padding: 0.5em 1em;
  color: #fff;
  font-size: 0.8125em;
  font-weight: 600;
  text-transform: uppercase;
  border: 0.0625em solid hsl(var(--clr-primary));
  border-radius: 0.3125em;
  background-color: transparent;
  background-image: linear-gradient(
    to right,
    transparent 0%,
    hsl(var(--clr-primary)) 100%
  );
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: hsl(var(--clr-primary));
  }
  &:not(:last-of-type) {
    margin-right: 1em;
  }
`

const LoginButton = styled.button`
  padding: 0.5em 1em;
  color: #fff;
  font-size: 0.8125em;
  font-weight: 600;
  text-transform: uppercase;
  border: 0.0625em solid hsl(var(--clr-accent));
  border-radius: 0.3125em;
  background-color: transparent;
  background-image: linear-gradient(
    to right,
    transparent 0%,
    hsl(var(--clr-accent)) 100%
  );
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: hsl(var(--clr-accent));
  }
  &:not(:last-of-type) {
    margin-right: 1em;
  }
`

function NavButtons() {
  return (
    <ButtonsContainer>
      <RegisterButton>Contact</RegisterButton>
      <LoginButton>Resident Portal</LoginButton>
    </ButtonsContainer>
  )
}

export default NavButtons
