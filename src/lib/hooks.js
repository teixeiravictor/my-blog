import { useEffect, useState } from "react";
import Prism from "prismjs";
import { slugify, mapHeadingElement, getActiveHeadingId } from "lib/utils";

export const usePrismHighlight = (dependency) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [dependency]);
};

export const useHeadings = (dependency) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const content = document.querySelector("[data-article-content]");
    if (!content) return;

    const headingElements = Array.from(content.querySelectorAll("h1, h2, h3"));

    headingElements.forEach((heading) => {
      if (!heading.id) {
        heading.id = slugify(heading.textContent);
      }
    });

    setHeadings(headingElements.map(mapHeadingElement));
  }, [dependency]);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const headingElements = Array.from(
        document.querySelectorAll(
          "[data-article-content] h1, [data-article-content] h2, [data-article-content] h3"
        )
      );
      setActiveId(getActiveHeadingId(headingElements, window.scrollY));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return { headings, activeId };
};

export const useScrollVisibility = (threshold) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > threshold);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return visible;
};

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
