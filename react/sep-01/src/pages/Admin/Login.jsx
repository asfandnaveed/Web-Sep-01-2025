import React, { useState } from "react";
import "../../App.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5001/api/admin/admin-login',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body : JSON.stringify({
            email:email,
            pass : password
        })
    });

    const data  = response.json();

    console.log(data);
    if(data.status){

    }else{

    }


    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-card shadow-lg p-4 rounded">
        <h2 className="text-center mb-4 fw-bold text-primary">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-3 animated-btn"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center small text-muted">
          © {new Date().getFullYear()} Admin Portal
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
