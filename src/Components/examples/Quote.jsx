
export const Quote = ({ quote, author}) => {
  return (
    <>
      <blockquote className="blockquote text-end mr-5 mt-5">
        <p className="mb-1">{quote}</p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>
    </>
  );
};
