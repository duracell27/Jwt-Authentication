import { useEffect, useState } from "react";
import "./App.css";
import Home from "./componets/Home";
import authService from "./services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import Privat from "./componets/Privat";
import Login from "./componets/Login";
import Signup from "./componets/Signup";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const logOut = () => {
    authService.logout();
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light text-white"
        style={{ backgroundColor: "#567f33" }}
      >
        <div class="container">
          <Link className="navbar-brand text-white" to={"/home"}>
            Shmidt Authentication
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul
              class="navbar-nav"
              style={{ justifyContent: "flex-end", flexGrow: 1 }}
            >
              {currentUser && (
                <li class="nav-item active">
                  <Link to={"/private"} className="nav-link text-white">
                    Private
                  </Link>
                </li>
              )}

              {currentUser ? (
                <li class="nav-item active">
                  <a class="nav-link text-white" href="/login" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              ) : (
                <>
                  <li class="nav-item active">
                    <Link to={"/login"} className="nav-link text-white">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/signup"} className="nav-link text-white">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ backgroundColor: "rgb(162 204 133)", height: '100vh' }}>
        <div className="container pt-3">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/private" element={<Privat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
