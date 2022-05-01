import * as S from "./styled";

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
);

export default Layout;
