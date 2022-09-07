import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Error = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      //   redirect: "http://localhost:3000/",
      callbackUrl: "/protected",
    });

    console.log(res);
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h3>Error!!!</h3>

        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Error;
