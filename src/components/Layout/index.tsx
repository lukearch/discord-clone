import Navbar from '../Navbar';
import SideMenu from '../SideMenu';
import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <S.LayoutContainer>
      <Navbar />
      <SideMenu />
      <S.Content>{children}</S.Content>
    </S.LayoutContainer>
  );
};

export default Layout;
