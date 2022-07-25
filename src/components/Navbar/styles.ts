import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 4.5rem;
  height: 100vh;
  background-color: ${props => props.theme.colors.background.terciary};
  padding: 0.75rem;
  position: relative;
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.default};
  transition: all 0.2s ease-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const Server = styled(Circle)`
  &:before {
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

  &.active {
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

export const HomeIcon = styled(Circle)`
  &:before {
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

  &.active {
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

export const NewServerButton = styled(Circle)`
  &:hover {
    background-color: ${props => props.theme.colors.pallete.green};
    border-radius: 35%;

    path {
      stroke: ${props => props.theme.colors.pallete.white};
    }
  }
`;

export const ExploreServerButton = styled(NewServerButton)`
  &:hover {
    path {
      fill: ${props => props.theme.colors.pallete.white};
    }

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
`;

export const Path = styled.path`
  fill: ${props => props.theme.colors.pallete.green};
  transition: all 0.2s ease-out;
`;

export const StrokePath = styled.path`
  stroke: ${props => props.theme.colors.pallete.green};
  transition: all 0.2s ease-out;
  stroke-width: 2;
`;
