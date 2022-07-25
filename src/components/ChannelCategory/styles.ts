import styled from 'styled-components';

export const CateogryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;

  &:first-child {
    padding-top: 0;
  }

  &.active {
    .arrow {
      transform: rotate(90deg);
    }
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.pallete.gray};
  padding: 0 0 0 0.188rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.5rem;

  span {
    width: 100%;
  }

  &:hover {
    color: ${props => props.theme.colors.pallete.white};

    div {
      path {
        stroke: ${props => props.theme.colors.pallete.white};
      }
    }
  }
`;

export const CategoryArrow = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  transition: all 0.2s ease-out;
  margin-right: 0.188rem;
`;

export const Path = styled.path`
  stroke: ${props => props.theme.colors.pallete.gray};
`;

export const CategoryContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.188rem;
`;
