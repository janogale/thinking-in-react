import React from "react";

// components

function Footer({ product: p }) {
  return (
    <footer>
      <p>
        &copy; Developed by{" "}
        <a href="https://twitter.com/mmjanagale">Janagale</a> -
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
