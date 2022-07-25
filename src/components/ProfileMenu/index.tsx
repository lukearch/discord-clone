import Image from 'next/image';
import { Profile } from '../../types/profile';
import * as S from './styles';

const ProfileMenu = () => {
  const profile: Profile = {
    id: '0309',
    name: 'lukearch',
    avatar: '/assets/images/me.png',
    bio: 'I am a software developer',
    email: 'lukearch.sh@gmail.com',
    phone: '+5511998888888',
  };

  return (
    <S.ProfileMenuContainer>
      <S.Avatar>
        <S.AvatarImage>
          <Image src={profile.avatar} alt={profile.name} width={32} height={32} />
        </S.AvatarImage>
        <S.AvatarStatus />
      </S.Avatar>
      <S.ProfileInfo>
        <S.ProfileName>{profile.name}</S.ProfileName>
        <S.ProfileTag>#{profile.id}</S.ProfileTag>
      </S.ProfileInfo>
      <S.MenuIcons>
        <S.MenuIcon>
          <Image src="/assets/icons/mic.svg" width={20} height={20} alt="" />
        </S.MenuIcon>
        <S.MenuIcon>
          <Image src="/assets/icons/phone.svg" width={20} height={20} alt="" />
        </S.MenuIcon>
        <S.MenuIcon>
          <Image src="/assets/icons/settings.svg" width={20} height={20} alt="" />
        </S.MenuIcon>
      </S.MenuIcons>
    </S.ProfileMenuContainer>
  );
};

export default ProfileMenu;
