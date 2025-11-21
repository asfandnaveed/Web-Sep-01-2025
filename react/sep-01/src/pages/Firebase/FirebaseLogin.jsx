import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";

function FirebaseLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✔ If already logged in → go to chat
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/chat");
    });
    
  }, []);

  const userLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (err) {
      alert("Invalid email or password");
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg border-0" style={{ width: "420px", borderRadius: "15px" }}>
        <h3 className="text-center mb-3 fw-bold">Welcome Back</h3>
        <p className="text-center text-muted mb-4">Please login to continue</p>

        <form onSubmit={userLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control custom-input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control custom-input"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold login-btn">
            Login
          </button>
        </form>

        <p className="text-center mt-3 small">
          Don’t have an account?  
          <a href="/" className="fw-semibold text-decoration-none"> Register</a>
        </p>
      </div>
    </div>
  );
}

export default FirebaseLogin;
