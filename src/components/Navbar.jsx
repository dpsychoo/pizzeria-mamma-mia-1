import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">🍕 Home</a>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔓 Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔒 Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔐 Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔐 Register</a>
                </li>
              </>
            )}
          </ul>
          <span className="navbar-text ms-auto text-primary">
            🛒 Total: ${total.toLocaleString()}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

