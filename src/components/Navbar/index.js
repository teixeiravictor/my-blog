import { useState, useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

import * as S from "./styled";
import data from "./links";

import LocaleSwitcher from "components/LocaleSwitcher";
import NavbarBurguer from "components/NavbarBurguer";

import { useOnClickOutside } from "utils/hooks";

const Navbar = () => {
  const router = useRouter();
  const { formatMessage: f } = useIntl();

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <S.Background>
      <S.Wrapper>
        <S.Container ref={node}>
          <S.NavbarMenu open={open}>
            {data.map((link, i) => (
              <S.NavbarItem key={i} active={router.pathname == link.url}>
                <Link href={link.url}>
                  <S.NavbarLink
                    active={router.pathname == link.url}
                    title={link.translatableKey.title}
                  >
                    {f({ id: link.translatableKey.label })}
                  </S.NavbarLink>
                </Link>
              </S.NavbarItem>
            ))}
          </S.NavbarMenu>
          <LocaleSwitcher />
          <NavbarBurguer open={open} setOpen={setOpen} />
        </S.Container>
      </S.Wrapper>
    </S.Background>
  );
};

export default Navbar;
