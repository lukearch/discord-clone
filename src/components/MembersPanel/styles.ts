import styled from 'styled-components';

export const MembersPanel = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  min-width: 15rem;
  height: 100%;
  padding: 1rem;
`;

export const Role = styled.div`
  display: flex;
  margin: 0.5rem 0;

  span {
    color: ${props => props.theme.colors.text.secondary};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

export const Member = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
`;

export const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const AvatarStatus = styled.div`
  display: flex;
  width: 0.625rem;
  height: 0.625rem;
  background-color: ${props => props.theme.colors.pallete.green};
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  outline: 0.188rem solid ${props => props.theme.colors.background.quaternary};
`;

export const AvatarImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  flex: 1;
  cursor: pointer;
`;

export const Name = styled.div`
  color: ${props => props.theme.colors.pallete.azoxo};
  font-weight: 700;
`;
