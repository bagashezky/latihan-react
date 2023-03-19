import React from "react";
import "./topbar.css";
import logoImage from "../../assets/Logo.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="logoImage">
          <img src={logoImage} alt="Logo" />
        </div>
        <ul className="textTopbar" href="#">tes</ul>
        <ul className="textTopbar" href="#">tes</ul>
        <ul className="textTopbar" href="#">tes</ul>
        <ul className="textTopbar" href="#">tes</ul>
        <ul className="textTopbar" href="#">tes</ul>
      </div>
    </div>
  );
}
