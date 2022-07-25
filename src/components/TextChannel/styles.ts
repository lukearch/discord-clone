import styled from 'styled-components';

export const Channel = styled.div`
  flex: 1;
  max-height: 2.125rem;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: ${props => props.theme.colors.background.secondary};
  transition: all 0.2s ease-out;
  padding: 0.375rem 0.5rem;

  span {
    transition: all 0.2s ease-out;
    color: ${props => props.theme.colors.pallete.gray};
    font-weight: 400;
    text-transform: lowercase;
    flex: 1;
  }

  &.active {
    filter: brightness(1.4);

    span {
      color: ${props => props.theme.colors.pallete.white};
    }
  }

  &:hover {
    filter: brightness(1.4);

    span {
      color: ${props => props.theme.colors.pallete.white};
    }
  }
`;

export const ChannelIcon = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin-right: 0.375rem;
`;

export const Path = styled.path`
  stroke: ${props => props.theme.colors.pallete.gray};
`;
