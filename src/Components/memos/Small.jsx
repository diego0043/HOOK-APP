export const Small = ({counter}) => {
  return (
    <>
      <div className="mt-4 flex justify-center">
        <h1>
          Counter: <small>{counter}</small>
        </h1>
      </div>
    </>
  );
};
