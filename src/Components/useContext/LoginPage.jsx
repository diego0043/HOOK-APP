import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  const updateName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const updatePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const addUser = () => {
    setUser(...user);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-3 text-center">
          <span className="fw-bold">Form example</span>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label fw-bold">Name</label>
          <div className="col-sm-10">
            <input
              onChange={updateName}
              value={user?.name}
              type="text"
              className="form-control"
              name="name"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label fw-bold">Password</label>
          <div className="col-sm-10">
            <input
              onChange={updatePassword}
              value={user?.password}
              type="password"
              className="form-control"
              name="password"
            />
          </div>
        </div>
        <div className="mb-3 row text-center">
          <div className="col">
            <button onClick={() => addUser} className="btn btn-outline-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
