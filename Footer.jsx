import React from "react";

function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright @ {year}
        <b> Created by Kathan</b>
      </p>
    </footer>
  );
}

export default Footer;
