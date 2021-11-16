import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './menu';

const Container = styled.div`
  width: 100%;
`

const HamurgerIcon = styled.div`
  height: 16px;
  width: 24px;
  cursor: pointer;
`

const HamburgerShortLine = styled.div`
  width: 16px;
  height: 2px;
  background: #3F6DE1;
`

const HamburgerLongLine = styled.div`
  width: 24px;
  height: 2px;
  background: #3F6DE1;
  margin: 3px 0 3px 0;
`

const MobileHamburger = () => {
  const [open, setOpen] = useState(false)

  const flipMenu = () => {
    setOpen(!open)
  }

  console.log('yo', open)

  return (
    <>
      <HamurgerIcon onClick={flipMenu}>
        <HamburgerShortLine />
        <HamburgerLongLine />
        <HamburgerShortLine />
      </HamurgerIcon>

      {open &&
        <Menu />}
    </>
  )
}

export default MobileHamburger;