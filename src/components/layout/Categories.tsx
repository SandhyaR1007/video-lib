import { useRef, useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Categories = () => {
  const ref = useRef<HTMLUListElement>(null);
  const [showPreviousIcon, setShowPreviousIcon] = useState<boolean>(false);
  const [showNextIcon, setShowNextIcon] = useState<boolean>(true);
  useEffect(() => {
    const container = ref.current;
    container?.addEventListener("scroll", handleShowIcons);
    return () => {
      container?.removeEventListener("scroll", handleShowIcons);
    };
  }, []);
  const handleShowIcons = () => {
    const container = ref.current;
    const scrollPosition = container?.scrollLeft;
    console.log(
      scrollPosition,
      container?.clientLeft,
      container?.clientWidth,
      container?.scrollWidth
    );
    console.log(
      container && container?.scrollWidth - container?.clientWidth,
      scrollPosition
    );
    setShowPreviousIcon(scrollPosition ? scrollPosition > 0 : false);
    setShowNextIcon(
      scrollPosition
        ? scrollPosition <= container.scrollWidth - container.clientWidth
        : false
    );
  };

  const scroll = (scrollOffset: number) => {
    if (ref && ref.current) ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="categories">
      {showPreviousIcon && (
        <AiOutlineLeft
          className="categories__arrow"
          onClick={() => scroll(-100)}
        />
      )}
      <ul className="categories__items" ref={ref}>
        <li>All</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
        <li>New</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
        <li>New</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
        <li>New</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
        <li>new items here</li>
        <li>New</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
      </ul>
      {showNextIcon && (
        <AiOutlineRight
          className="categories__arrow"
          onClick={() => scroll(20)}
        />
      )}
    </div>
  );
};

export default Categories;
