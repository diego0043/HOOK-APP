import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({...boxSize, width, height});
  }, [quote]);

  return (
    <>
      <blockquote
        className="blockquote text-end mr-5 mt-5"
        style={{ display: "flex" }}
      >
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>
      <div>
        { JSON.stringify(boxSize)}
      </div>
    </>
  );
};
