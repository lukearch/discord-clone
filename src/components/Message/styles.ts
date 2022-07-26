import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  margin-top: 1.0625rem;
`;

export const RecentMessageContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-out;
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
  justify-content: space-between;
`;

export const ProfileName = styled.span`
  font-size: 1;
  color: ${props => props.theme.colors.pallete.white};
`;

export const MessageInfoTime = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  height: 100%;
  font-weight: 300;
`;

export const MessageInfoText = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageText = styled.p`
  color: ${props => props.theme.colors.text.default};
  font-weight: 300;
`;
