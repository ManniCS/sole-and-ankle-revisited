/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';


import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import NavLink from '../NavLink';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay
      style={{ 
      }}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <Wrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" size={24}/>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler/>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Wrapper>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: var(--color-gray-alpha-80);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

const Content = styled(DialogContent)`
  width: 300px;
  background: var(--color-white);
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 32px;
  padding-bottom: 32px;
`

const Filler = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  flex: 1;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;

  flex: 1;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
  font-weight: var(--weight-normal)
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`

export default MobileMenu;
