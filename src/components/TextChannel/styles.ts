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
  padding: 0.375rem 0.5rem;
  margin-bottom: 0.125rem;

  &:last-child {
    margin-bottom: 0;
  }

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

    div {
      filter: brightness(0.8);
    }
  }

  &:hover {
    filter: brightness(1.2);

    span {
      color: ${props => props.theme.colors.pallete.white};
    }

    div {
      filter: brightness(0.8);
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
