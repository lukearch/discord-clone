import styled from 'styled-components';

export const Chat = styled.div`
  height: calc(100vh - 3.063rem);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Messages = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const MessagesContent = styled.div`
  height: 100%;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

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

export const InitialContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: auto;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.text.default};
  font-size: 2.125rem;
  margin: 0.5rem 0;
`;

export const Subtitle = styled.h2`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1rem;
  font-weight: 400;

  em {
    font-style: normal;
    font-weight: 700;
  }
`;

export const ContentIcon = styled.div`
  background-color: ${props => props.theme.colors.background.darker};
  width: 4.25rem;
  height: 4.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    width: 36px;
    height: 34px;
  }
`;

export const MessageInput = styled.div`
  width: 100%;
  padding: 0 1rem 1.5rem 1rem;
  display: flex;
  align-items: center;
`;

export const MessageInputField = styled.input`
  background-color: ${props => props.theme.colors.background.input};
  width: 100%;
  font-size: 1rem;
  padding: 0.688rem 0.625rem 0.688rem 0;
  color: ${props => props.theme.colors.pallete.white};
  height: 100%;
  font-weight: 300;
`;

export const AddIconField = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0.625rem 1rem;
  background-color: ${props => props.theme.colors.background.input};
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  cursor: pointer;

  svg {
    transition: all 0.2s ease-out;
  }

  &:hover {
    svg {
      filter: brightness(1.2);
    }
  }
`;

export const Path = styled.path`
  fill: #a5a6a9;
`;

export const StrokedPath = styled.path`
  stroke: ${props => props.theme.colors.pallete.white};
`;
