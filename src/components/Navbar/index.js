import Link from "next/link";
import { useRouter } from "next/router";

import links from "./content";

import * as S from "./styled";

const Navbar = () => {
  const router = useRouter();

  return (
    <S.Background>
      <S.Wrapper>
        <S.Container>
          <S.NavbarGroup>
            {links.map((link, i) => (
              <S.NavbarItem key={i}>
                <Link href={link.url}>
                  <S.NavbarLink
                    active={router.pathname == link.url}
                    title={link.title}
                  >
                    {link.label}
                  </S.NavbarLink>
                </Link>
              </S.NavbarItem>
            ))}
          </S.NavbarGroup>
        </S.Container>
      </S.Wrapper>
    </S.Background>
  );
};

export default Navbar;
