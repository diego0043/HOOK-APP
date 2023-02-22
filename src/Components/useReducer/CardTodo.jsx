export const CardTodo = ({ name }) => {
  return (
    <>
      <div className="card h-44 w-60 m-2 text-center justify-center shadow font-semibold">
        <li className="">{name}</li>
        <div className="row flex justify-center mt-5">
          <div className="col-9 absolute">
            <button className="btn btn-outline-danger w-32 relative bottom-0  justify-center align-middle font-semibold">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
