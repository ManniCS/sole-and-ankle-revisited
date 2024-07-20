import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden';
import NavLink from '../NavLink';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">À&nbsp;Vendre</NavLink>
          <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Filler />
        <MobileActions>
          <ShoppingButton>
            <ButtonIcon id="shopping-bag" size={24}/>
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingButton>
          <UnstyledButton>
            <ButtonIcon id="search" size={24}/>
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <ButtonIcon id="menu" size={24}/>
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
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
  border-bottom: 1px solid ${COLORS.gray[300]};

  overflow-x: auto;

  @media (${QUERIES.tabletAndSmaller}) { 
    border-top: solid 4px ${COLORS.gray[900]};
    align-items: center;
  }

  @media (${QUERIES.mobileAndSmaller}) { 
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    11.2vw - 6.75rem,
    3rem
  );
  margin: 0px 48px;

  @media (${QUERIES.tabletAndSmaller}) { 
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndSmaller}) { 
    flex: revert;
  }
`;


const Filler = styled.div`
  flex: 1;
`;

const ShoppingButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const ButtonIcon = styled(Icon)`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  height: 100%;
  width: 100%;
`

const MobileActions = styled.div`
  display: none;

  @media (${QUERIES.tabletAndSmaller}) { 
    display: flex;
    gap: 32px;
  }

  @media (${QUERIES.mobileAndSmaller}) { 
    gap: 16px;
  }

`

export default Header;
