import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3.063rem;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.default};
  border-bottom: 1px solid ${props => props.theme.colors.background.terciary};
  padding: 0 1rem;
`;

export const ChannelTitle = styled.span`
  color: ${props => props.theme.colors.pallete.white};
  display: flex;
  align-items: center;
`;

export const ChannelIcon = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin-right: 0.5rem;
`;

export const Path = styled.path`
  stroke: ${props => props.theme.colors.pallete.gray};
`;
