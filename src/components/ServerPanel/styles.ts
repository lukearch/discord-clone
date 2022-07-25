import styled from 'styled-components';

export const PanelContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
`;

export const ServerHeader = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;
  min-height: 3.063rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-out;
  background-color: ${props => props.theme.colors.background.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.background.terciary};

  h1 {
    font-size: 0.938rem;
    color: ${props => props.theme.colors.pallete.white};
  }

  &:hover {
    filter: brightness(1.3);
  }
`;

export const HeaderArrow = styled.div``;

export const ServerChannels = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden scroll;
  padding: 1rem 0.5rem 0 0;

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    transition: all 0.2s ease-out;
    border-radius: 0.375rem;
    background-color: ${props => props.theme.colors.background.terciary};
    background-clip: padding-box;
  }
`;

export const Path = styled.path`
  stroke: ${props => props.theme.colors.pallete.white};
  stroke-width: 2;
`;
