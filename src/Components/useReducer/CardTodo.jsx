export const CardTodo = ({ item, del, finaly }) => {
  return (
    <>
      <div className="card h-44 w-60 m-2 text-center justify-center shadow font-semibold col-3">
        {item.done ? (
          <li
            onClick={() => finaly(item.id)}
            className="text-green-500 cursor-pointer line-through"
          >
            {item.desc}
          </li>
        ) : (
          <li
            onClick={() => finaly(item.id)}
            className="text-yellow-400 cursor-pointer"
          >
            {item.desc}
          </li>
        )}
        <div className="row flex justify-center mt-5">
          <div className="col-9 absolute">
            <button
              onClick={() => del(item.id)}
              className="btn btn-outline-danger w-32 relative bottom-0  justify-center align-middle font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
