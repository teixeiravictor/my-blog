import * as S from "./styled";

const NavbarBurguer = ({ open, setOpen }) => (
  <S.Burger open={open} onClick={() => setOpen(!open)}>
    <S.BurgerLine open={open} />
    <S.BurgerLine open={open} />
    <S.BurgerLine open={open} />
  </S.Burger>
);

export default NavbarBurguer;
