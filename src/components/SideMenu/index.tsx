import { useRouter } from 'next/router';

import ServerPanel from '../ServerPanel';
import * as S from './styles';

const SideMenu = () => {
  const router = useRouter();
  return (
    <S.SideMenuContainer>
      {router.pathname.includes('channels') ? <ServerPanel serverName="My Server" /> : <></>}
    </S.SideMenuContainer>
  );
};

export default SideMenu;
