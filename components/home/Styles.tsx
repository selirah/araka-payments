import styled from 'styled-components';

export const Header = styled.header`
  background: #fff;
`;

export const Navbar = styled.div`
  text-transform: uppercase;
  font-size: 0.6875rem;
  letter-spacing: 0.03125rem;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;

  background: hsla(0, 0%, 100%, 0.99);
  z-index: 100;
  height: 5rem;
  border: 1px solid #ffdbce;
  border-top: 0;
  border-bottom-right-radius: 16.8px;
  border-bottom-left-radius: 16.8px;
`;
