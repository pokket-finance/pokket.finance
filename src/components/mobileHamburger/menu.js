import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ThemeSwitch from '../../components/themeSwitch';


const Container = styled.div`
  width: 100vw;
  /* height: 300px; */
  background-color: ${(props) => {
    return props.theme.name === 'Light' ? '#FFFFFF' : '#252632';
  }};
  left: 0;
  position: absolute;
  margin-top: 60px;
  border: none;
`

const Typography = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 30px;
  color: ${(props) => {
    return props.theme.name === 'Light' ? '#3F6DE1' : 'white';
  }};
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const LinkContainer = styled.div`
  color: white;
  margin: 0 0 25px 16px; 
  display: flex;
  flex-direction: column;
`

const ThemeSwitchContainer = styled.div`
  margin-top: 20px;
`

const Menu = () => {
  return (
    <Container>

      <LinkContainer>
        <StyledLink href="/"><Typography>Home</Typography></StyledLink>
        <StyledLink href="/team"><Typography>Team</Typography></StyledLink>
        <StyledLink href="/roadmap"><Typography>Roadmap</Typography></StyledLink>
        <ThemeSwitchContainer>
          <ThemeSwitch />
        </ThemeSwitchContainer>
      </LinkContainer>

    </Container>
  )
}

export default Menu;