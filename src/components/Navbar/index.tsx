import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';

const Navbar = () => {
  const router = useRouter();

  return (
    <S.NavbarContainer>
      <S.Servers>
        <Link href={'/'}>
          <S.HomeIcon className={router.pathname === '/' ? 'active' : ''}>
            <Image src="/assets/icons/discord-logo-white.svg" width={26} height={20} alt="" />
          </S.HomeIcon>
        </Link>
        <S.Separator />
        <Link href={'/channels/myserver/geral'}>
          <S.Server className={router.pathname.includes('myserver') ? 'active' : ''}>
            <Image src={'/assets/images/server-logo.jpg'} width={48} height={48} alt="" />
          </S.Server>
        </Link>
        <S.NewServerButton>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <S.StrokePath d="M11.8367 4V20M4 12H20" stroke="white" strokeLinecap="round" />
          </svg>
        </S.NewServerButton>
        <S.ExploreServerButton>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <S.Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.05405 17.8667L9.77027 9.86667L17.9459 6.13333L14.1622 14.2L6.05405 17.8667Z"
            />
            <S.Path d="M13.0811 12C13.0811 12.5891 12.5971 13.0667 12 13.0667C11.4029 13.0667 10.9189 12.5891 10.9189 12C10.9189 11.4109 11.4029 10.9333 12 10.9333C12.5971 10.9333 13.0811 11.4109 13.0811 12Z" />
          </svg>
        </S.ExploreServerButton>
      </S.Servers>
    </S.NavbarContainer>
  );
};

export default Navbar;
