import React from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import Logo from "../assets/images/Logo.png";

const Landing = () => {
  return (
    <PagesLayouts>
      <div>
        <h1>Edmoyce</h1>
        <p>Library</p>
        <div>
          <p>
            "Your Premier Digital Library Management for updating book resource"
          </p>
        </div>
      </div>
      <div>
        <h2>Welcome Back !!</h2>
        <p>Please Enter Your Credntials To Log in</p>
        <div>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button>Forgot Password</button>
        </div>
        <button>SIGN IN</button>
      </div>
    </PagesLayouts>
  );
};

export default Landing;
