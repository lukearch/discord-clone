import Navbar from '../Navbar';
import * as S from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutContainer>
      <Navbar />
      <S.Content>{children}</S.Content>
    </S.LayoutContainer>
  );
};

export default Layout;
