import * as S from "./styled";
import Icons from "./icons";
import { useScrollVisibility } from "lib/hooks";

const SCROLL_THRESHOLD = 300;

const ScrollToTop = () => {
  const visible = useScrollVisibility(SCROLL_THRESHOLD);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <S.Button
      visible={visible}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <Icons.ArrowUp size={20} aria-hidden="true" />
    </S.Button>
  );
};

export default ScrollToTop;
