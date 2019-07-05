import React from 'react';

export default function NavBar({ handleShowAddGame, showAddGame }) {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light sticky-top"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <a className="navbar-brand button-link" href="#">
        Navbar
      </a>
      <a
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link button-link" href="#">
              Home <span className="sr-onl button-link">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex button-link"
              href="#"
              onClick={handleShowAddGame}
            >
              <i className="fa fa-plus" aria-hidden="true" />
              {'    '}
              <p>&nbsp; {showAddGame ? 'Remove "Add Game"' : 'Add Game'}</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex button-link"
              href="#"
              onClick={handleShowAddGame}
            >
              <i className="fa fa-users" aria-hidden="true" />
              {'    '}
              <p>&nbsp; Login/SignUp</p>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle button-link"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item button-link" href="#">
                Action 1
              </a>
              <a className="dropdown-item button-link" href="#">
                Action 2
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 d-flex justify-content-around">
          <div>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
          </div>
          <div>
            <a
              className="btn btn-outline-success my-2 my-sm-0 button-link"
              type="submit"
            >
              Search
            </a>
          </div>
        </form>
      </div>
    </nav>
  );
}
