import React from "react";
import { useState } from "react";

export const login = () => {
  const [registerMode, setRegist] = useState(false);

  const [info, setInfo] = useState({
    username: "",
    password: "",
    email: "",
    userinfo: "",
  });


  function handleChange(e) {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      };
    });
  }

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch();
//   }

  return (
    <div>
      {registerMode ? (
        <div>
          <div>
            <h2>Login</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <h5>Name:</h5>
                <input
                  type="text"
                  name="username"
                  id="1"
                  onChange={handleChange}
                />
                <span>{info.username.length} / 35</span>
              </div>
              <div>
                <h5>Password:</h5>
                <input
                  type="text"
                  name="password"
                  id="1"
                  onChange={handleChange}
                />
                <span>{info.username.length} / 35</span>
              </div>
              <button type="submit" >Login</button>
            </form>
          </div>
        </div>
      ) : (
        <div>a</div>
      )}
    </div>
  );
};
