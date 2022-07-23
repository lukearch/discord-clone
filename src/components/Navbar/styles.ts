import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 4.5rem;
  height: 100vh;
  background-color: ${props => props.theme.colors.background.terciary};
  padding: 0.75rem;
  position: relative;
`;

export const Server = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.default};
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }

  &:after {
    content: '';
    transition: all 0.2s ease-out;
  }

  &:hover {
    background-color: ${props => props.theme.colors.pallete.azoxo};
    border-radius: 35%;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      background-color: ${props => props.theme.colors.pallete.white};
      width: 0.25rem;
      height: 1.25rem;
      border-top-right-radius: 30%;
      border-bottom-right-radius: 30%;
    }
  }

  &.selected {
    background-color: ${props => props.theme.colors.pallete.azoxo};
    border-radius: 35%;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      background-color: ${props => props.theme.colors.pallete.white};
      width: 0.25rem;
      height: 2.5rem;
      border-top-right-radius: 30%;
      border-bottom-right-radius: 30%;
    }
  }
`;

export const Servers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.default};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:after {
    content: '';
    transition: all 0.2s ease-out;
  }

  &:hover {
    background-color: ${props => props.theme.colors.pallete.azoxo};
    border-radius: 35%;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      background-color: ${props => props.theme.colors.pallete.white};
      width: 0.25rem;
      height: 1.25rem;
      border-top-right-radius: 30%;
      border-bottom-right-radius: 30%;
    }
  }

  &.selected {
    background-color: ${props => props.theme.colors.pallete.azoxo};
    border-radius: 35%;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      background-color: ${props => props.theme.colors.pallete.white};
      width: 0.25rem;
      height: 2.5rem;
      border-top-right-radius: 30%;
      border-bottom-right-radius: 30%;
    }
  }
`;

export const Separator = styled.div`
  width: 2rem;
  height: 0.125rem;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.background.default};
  margin-bottom: 0.5rem;
`;

export const NewServerButton = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.default};
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.pallete.green};
    border-radius: 35%;
  }
`;
