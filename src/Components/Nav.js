import React from "react";

function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="/Components/Pages/Home.js">Home</a>
        </li>
        <li>
          <a href="/Components/Pages/About.js">About</a>
        </li>
        <li>
          <a href="/Components/Pages/Menu.js">Menu</a>
        </li>
        <li>
          <a href="/Components/Pages/Reservations.js">Reservations</a>
        </li>
        <li>
          <a href="/Components/Pages/OrderOnline.js">Order Online</a>
        </li>
        <li>
          <a href="/Components/Pages/Login.js">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
