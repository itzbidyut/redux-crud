import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDetailsAction } from "../redux/action/action";
import { useParams } from "react-router-dom";
// import GetDetailsByIdHooks from "../hooks/getDetailsByIdHooks";
import axios from "axios";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //   const isResponseSeletor = useSelector((state) => state.reducer.isResponse);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/details/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, [id]);

  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      name: name,
      email: email,
      phone: phone,
    };

    dispatch(updateDetailsAction(finalData, id));
    alert("completed");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container mt-5">
      <form className="mt-5" onSubmit={(e) => formSubmit(e)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => nameHandler(e)}
            value={name}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => emailHandler(e)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => phoneHandler(e)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Update details
        </button>
      </form>
    </div>
  );
}
