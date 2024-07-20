import styled from 'styled-components/macro';


const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  min-width: max-content;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default NavLink;
