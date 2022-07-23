import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './styles';

const Navbar = () => {
  const router = useRouter();

  return (
    <S.NavbarContainer>
      <S.Servers>
        <S.HomeIcon className={router.pathname === '/' ? 'selected' : ''}>
          <Image src="/assets/icons/discord-logo-white.svg" width={26} height={20} alt="" />
        </S.HomeIcon>
        <S.Separator></S.Separator>
        <S.Server></S.Server>
        <S.NewServerButton>
          <Image src="/assets/icons/plus_green.svg" width={24} height={24} alt="" />
        </S.NewServerButton>
      </S.Servers>
    </S.NavbarContainer>
  );
};

export default Navbar;
