import styled from 'styled-components';

export const ProfileMenuContainer = styled.div`
  width: 100%;
  min-height: 3.25rem;
  background-color: ${props => props.theme.colors.background.quaternary};
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
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
  margin-left: 0.5rem;
  flex: 1;
  cursor: pointer;
`;

export const ProfileName = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.pallete.white};
`;

export const ProfileTag = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.pallete.gray};
`;

export const MenuIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  background: ${props => props.theme.colors.background.quaternary};
  transition: all 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }
`;
