import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

import Icon from '../Icon'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <NavButton><ButtonIcon id="shopping-bag"/></NavButton>
          <NavButton><ButtonIcon id="search"/></NavButton>
          <NavButton onClick={() => setShowMobileMenu(true)}><ButtonIcon id="menu"/></NavButton>
        </MobileNav>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (max-width: 1000px) { 
    border-top: solid 4px ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (max-width: 1000px) { 
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
  `;

const ButtonIcon = styled(Icon)`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  height: 100%;
  width: 100%;
`

const NavButton = styled.button`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  background: none;
  border: none;
`

const MobileNav = styled.div`
  display: none;

  @media (max-width: 1000px) { 
    display: flex;
    height: 100%;
    justify-content: space-between;
    width: clamp(
      100px,
      20vw,
      140px
    )
  }
`

export default Header;
