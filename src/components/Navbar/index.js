import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

import * as S from "./styled";

import LocaleSwitcher from "components/LocaleSwitcher";

const Navbar = () => {
  const router = useRouter();
  const { formatMessage: f } = useIntl();

  const links = [
    {
      label: f({ id: "navBarHome" }),
      url: "/",
      title: f({ id: "navBarHomeTitle" }),
    },
    {
      label: f({ id: "navBarArticles" }),
      url: "/articles",
      title: f({ id: "navBarArticlesTitle" }),
    },
    {
      label: f({ id: "navBarContact" }),
      url: "/contact",
      title: f({ id: "navBarContactTitle" }),
    },
    {
      label: f({ id: "navBarStyleGuide" }),
      url: "/style-guide",
      title: f({ id: "navBarStyleGuideTitle" }),
    },
  ];

  return (
    <S.Background>
      <S.Wrapper>
        <S.Container>
          <S.NavbarGroup>
            {links.map((link, i) => (
              <S.NavbarItem key={i} active={router.pathname == link.url}>
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
            <LocaleSwitcher />
          </S.NavbarGroup>
        </S.Container>
      </S.Wrapper>
    </S.Background>
  );
};

export default Navbar;
