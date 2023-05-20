import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationLinks;