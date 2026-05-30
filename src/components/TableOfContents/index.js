import * as S from "./styled";
import { useIntl } from "react-intl";

const TableOfContents = ({ headings, activeId }) => {
  const { formatMessage: f } = useIntl();
  
  if (headings.length === 0) return null;

  return (
    <S.Wrapper>
      <S.Label>{f({ id: "tableOfContents" })}</S.Label>
      <S.List>
        {headings.map((heading) => (
          <li key={heading.id}>
            <S.Link
              href={`#${heading.id}`}
              data-level={heading.level}
              data-active={activeId === heading.id}
            >
              {heading.text}
            </S.Link>
          </li>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default TableOfContents;
