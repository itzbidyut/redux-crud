import React, { useEffect } from "react";
import { getDetailsAction, deleteDetailsAction } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);

  useEffect(() => {
    dispatch(getDetailsAction());
  }, [dispatch]);

  const deleteHandle = (id) => {
    dispatch(deleteDetailsAction(id));
    alert("DELETED");
    window.location.reload(false);
  };

  return (
    <div>
      <div className="container pb-5">
        <h1 className="text-center my-5">React redux crud application</h1>
        <table className="table my-5">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {responseData?.map((item, index) => (
              <tr key={index}>
                <td> {item.id}</td>
                <td> {item.name}</td>
                <td> {item.email}</td>
                <td> {item.phone}</td>
                <td className="iconsss">
                  <Link to={`/edit/${item.id}`}>
                    <span className="material-symbols-outlined">edit</span>
                  </Link>
                  <div className="ml-4">
                    <span
                      className=" material-symbols-outlined"
                      onClick={() => deleteHandle(item.id)}
                    >
                      delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
