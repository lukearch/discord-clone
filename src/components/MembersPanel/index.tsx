import Image from 'next/image';
import { useTheme } from 'styled-components';

import { Profile } from '../../types/profile';
import * as S from './styles';

const MembersPanel = () => {
  const member: Profile = {
    id: '0309',
    name: 'lukearch',
    avatar: '/assets/images/me.png',
    bio: 'I am a software developer',
    email: 'lukearch.sh@gmail.com',
    phone: '+5511998888888',
    roles: [
      {
        name: 'developer',
        color: useTheme().colors.pallete.azoxo,
      },
    ],
  };

  return (
    <>
      <S.MembersPanel>
        <S.Role>
          <span>developer - 1</span>
        </S.Role>
        <S.Member>
          <S.Avatar>
            <S.AvatarImage>
              <Image src={member.avatar} alt={member.name} width={32} height={32} />
            </S.AvatarImage>
            <S.AvatarStatus />
          </S.Avatar>
          <S.ProfileInfo style={{ color: member.roles ? member.roles[0].color : '' }}>
            <S.Name>{member.name}</S.Name>
          </S.ProfileInfo>
        </S.Member>
      </S.MembersPanel>
    </>
  );
};

export default MembersPanel;
